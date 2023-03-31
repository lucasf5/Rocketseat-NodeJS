export class Checkin {
  private readonly _id: string
  private readonly _created_at: Date
  private readonly _validate_at: Date
  private readonly _user_id: string
  private readonly _gyn_id: string

  constructor (
    id: string,
    createdAt: Date,
    validateAt: Date,
    userId: string,
    gynId: string
  ) {
    this._id = id
    this._created_at = createdAt
    this._validate_at = validateAt
    this._user_id = userId
    this._gyn_id = gynId
  }

  get id (): string {
    return this._id
  }

  get created_at (): Date {
    return this._created_at
  }

  get validate_at (): Date {
    return this._validate_at
  }

  get user_id (): string {
    return this._user_id
  }

  get gyn_id (): string {
    return this._gyn_id
  }
}
