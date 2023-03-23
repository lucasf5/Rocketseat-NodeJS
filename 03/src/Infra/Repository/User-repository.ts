import { type UserRepositoryInterface } from '@/Domain/Repository/UserRepository.interface'
import { connection } from '../Database/Connection'
import { User } from '@/Domain/Entity/User'
import { hash } from 'bcryptjs'
import CustomError from '../Errors/CustomErrors'

export class UserRepository implements UserRepositoryInterface {
  async findAll(): Promise<User[]> {
    const users = await connection.user.findMany()

    const usersReturn = users.map(user => {
      return new User(user.name, user.email, user.password_hash, user.role, user.id)
    })

    return usersReturn
  }

  async findById (id: string): Promise<User | null> {
    const user = await connection.user.findUnique({
      where: {
        id
      }
    })

    if (user === null) {
      throw new CustomError('User not find', 402)
    }

    const userReturn = new User(user.name, user.email, user.password_hash, user.role, user.id)

    return userReturn
  }

  async create (data: User): Promise<User> {
    const { name, email, role, password_hash } = data

    const userWithSameEmail = await this.findByEmail(email)

    if (userWithSameEmail !== null) {
      throw new CustomError('User already exists', 409)
    }

    const passwordHash = await this.hashPassword(password_hash)

    const user = await connection.user.create({
      data: {
        name,
        email,
        password_hash: passwordHash,
        role
      }
    })

    const userReturn = new User(name, email, passwordHash, role, user.id)

    return userReturn
  }

  async update (id: string, data: User): Promise<User> {
    const user = await connection.user.update({
      where: {
        id
      },
      data: {
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        role: data.role
      }
    })

    if (user === null) {
      throw new CustomError('User not updated', 400)
    }

    const userReturn = new User(user.name, user.email, user.password_hash, user.role, user.id)

    return userReturn
  }

  async delete (id: string): Promise<void> {
    const user = await connection.user.delete({
      where: {
        id
      }
    })

    if (user === null) {
      throw new CustomError('User not deleted', 400)
    }
  }

  async findByEmail (email: string): Promise<User | null> {
    try {
        const user = await connection.user.findUnique({
        where: {
          email
        }
      })

      if (user === null) {
        return null
      }

      const userReturn = new User(user.name, user.email, user.password_hash, user.role, user.id)

      return userReturn
    } catch (error) {
      console.log(error)
      throw new CustomError('Error to find user by email', 500)
    }
  }

  async hashPassword(password: string): Promise<string> {
    try {
      const passwordHash = await hash(password, 8)

      return passwordHash
    } catch (error) {
      throw new CustomError('Error to hash password', 500)
    }
  }
}
