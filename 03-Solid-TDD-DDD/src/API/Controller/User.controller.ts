import { type User } from '@/Domain/Entity/User'
import { type CustomErrorInterface } from '@/Infra/Errors/CustomErrors.interface'
import { UserRepository } from '@/Infra/Repository/User-repository'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export class UserController {
  async register (request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    const user = request.body

    try {
      const data = await userRepository.create(user as User)

      void reply.status(201).send(data)
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send({
        message: customError.message,
        statusCode: customError.statusCode
      })
    }
  }

  async findAll (_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    try {
      const data = await userRepository.findAll()

      void reply.status(200).send(data)
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send(customError.message)
    }
  }

  async findById (request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    const { id } = request.params as { id: string }

    try {
      const data = await userRepository.findById(id)

      void reply.status(200).send(data)
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send(customError.message)
    }
  }

  async update (request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    const { id } = request.params as { id: string }

    const user = request.body

    try {
      const data = await userRepository.update(id, user as User)

      void reply.status(200).send(data)
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send(customError.message)
    }
  }

  async delete (request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    const { id } = request.params as { id: string }

    try {
      await userRepository.delete(id)
      void reply.status(204).send()
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send(customError.message)
    }
  }

  async authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository = new UserRepository()

    const { email, password } = request.body as { email: string, password: string }

    try {
      await userRepository.checkPassword(email, password)

      void reply.status(200).send("token")
    } catch (error) {
      const customError = error as CustomErrorInterface

      void reply.status(customError.statusCode).send(customError.message)
    }
  }
}
