export class Gyn {
  private readonly _id: number
  private readonly _title: string
  private readonly _description: string
  private readonly _phone: string
  private readonly _latitude: string
  private readonly _longitude: string

  constructor (
    id: number,
    title: string,
    description: string,
    phone: string,
    latitude: string,
    longitude: string
  ) {
    this._id = id
    this._title = title
    this._description = description
    this._phone = phone
    this._latitude = latitude
    this._longitude = longitude
  }

  get id (): number {
    return this._id
  }

  get title (): string {
    return this._title
  }

  get description (): string {
    return this._description
  }

  get phone (): string {
    return this._phone
  }

  get latitude (): string {
    return this._latitude
  }

  get longitude (): string {
    return this._longitude
  }
}
