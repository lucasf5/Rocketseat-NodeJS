import { describe, test, beforeAll, afterAll, expect } from 'vitest'
import { app } from '../app'
import request from 'supertest'

// const server = 'http://127.0.0.1:3333'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe.only('When access the principal route: ', () => {
  test.only('Status code should be: ', async () => {
    const resp = await request(app.server).get('/').expect(200)
    console.log(resp)
  })

  test('Body code should be: ', async () => {
    const response = await request(app.server).get('/')
    const responseBody = expect.objectContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String)
      })
    ])

    expect(response.status).toBe(200)
    expect(response.body).toEqual(responseBody)
  })

  test('Body code when I access id should be: ', async () => {
    const id = 1
    const response = await request(app.server).get(`/${id}`)
    const responseBody = expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String)
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual(responseBody)
  })
})

describe('When access the userbook route: ', () => {
  test('Status code should be: ', async () => {
    await request(app.server).get('/userbook').expect(200)
  })

  test('Body code should be: ', async () => {
    const response = await request(app.server).get('/userbook')
    const responseBody = expect.objectContaining([
      expect.objectContaining({
        id: expect.any(Number),
        User: {
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String)
        },
        Book: {
          id: expect.any(Number),
          title: expect.any(String),
          author: expect.any(String)
        }
      })
    ])

    expect(response.status).toBe(200)
    expect(response.body).toEqual(responseBody)
  })

  test('Body code when I access id should be: ', async () => {
    const response = await request(app.server).get('/userbook/1')
    const responseBody = expect.objectContaining({
      id: expect.any(Number),
      User: {
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String)
      },
      Book: {
        id: expect.any(Number),
        title: expect.any(String),
        author: expect.any(String)
      }
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual(responseBody)
  })
})
