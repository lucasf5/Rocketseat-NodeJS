import { expect, test } from 'vitest'
import fetch from 'node-fetch'

test('home', () => {
  expect(1).toBe(1)
})

test('Rota /', async () => {
  const response = await fetch('http://localhost:3333/')
  expect(response.status).toBe(200)
})

test('Rota /books', async () => {
  const response = await fetch('http://localhost:3333/books')
  expect(response.status).toBe(200)
})
