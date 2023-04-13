import { it, describe } from 'vitest'
import { CheckinRepository } from './Checkin-repository'

const makeSut = () => {
  const sut = new CheckinRepository()
  return { sut }
}

describe('CheckinRepository', () => {
  it('should be able to create a checkin', () => {
    const { sut } = makeSut()

    const checkin = sut.create({
      user_id: 'any_user_id',
      gyn_id: 'any_gyn_id'
    })
  })
})
