import { type User } from '../Entity/User'
import type Repository from './Repository.interface'

export interface UserRepositoryInterface extends Repository<User> {
  findByEmail: (email: string) => Promise<User | null>
}
