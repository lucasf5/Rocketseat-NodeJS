import { type UserInterface } from '../Interfaces/UserInterface'

export class User implements UserInterface {
  private readonly _id?: string
  private readonly _name: string
  private readonly _email: string
  private readonly _password_hash: string
  private readonly _role: string

  constructor (name: string, email: string, password_hash: string, role: string, id?: string) {
    this._id = id
    this._name = name
    this._email = email
    this._password_hash = password_hash
    this._role = role
  }

  get id(): string | undefined {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get email(): string {
    return this._email
  }

  get password_hash(): string {
    return this._password_hash
  }

  get role(): string {
    return this._role
  }

}
