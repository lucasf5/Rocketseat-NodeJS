export class Checkin {
  private readonly _id: number
  private readonly _created_at: Date
  private readonly _updated_at: Date
  private readonly _user_id: number
  private readonly _gyn_id: number

  constructor (
    id: number,
    createdAt: Date,
    updatedAt: Date,
    userId: number,
    gynId: number
  ) {
    this._id = id
    this._created_at = createdAt
    this._updated_at = updatedAt
    this._user_id = userId
    this._gyn_id = gynId
  }

  get id (): number {
    return this._id
  }

  get created_at (): Date {
    return this._created_at
  }

  get updated_at (): Date {
    return this._updated_at
  }

  get user_id (): number {
    return this._user_id
  }

  get gyn_id (): number {
    return this._gyn_id
  }
}
