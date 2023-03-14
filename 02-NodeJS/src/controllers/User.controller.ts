import { type FastifyReply, type FastifyRequest } from 'fastify'
import User from '../models/User/User'
import { z } from 'zod'

interface requestSchema {
  id: string
  name: string
  email: string
  password: string
  token?: string
}

class UserController {
  public async index (_req: FastifyRequest, res: FastifyReply): Promise<void> {
    const users = await User.findAll({ attributes: { exclude: ['password'] } })
    void res.status(200).send(users)
  }

  public async show (req: FastifyRequest, res: FastifyReply): Promise<void> {
    const { id } = req.params as requestSchema
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    })
    void res.status(200).send(user)
  }

  public async store (req: FastifyRequest, res: FastifyReply): Promise<void> {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6)
    })
    const { name, email, password } = bodySchema.parse(req.body)
    const user = await User.create({ name, email, password })
    void res.status(201).send(user)
  }

  public async destroy (req: FastifyRequest, res: FastifyReply): Promise<void> {
    const { id } = req.params as requestSchema
    const user = await User.destroy(id as any)
    void res.status(200).send({
      message: 'Deletado com sucesso!',
      user
    })
  }

  public async login (req: FastifyRequest, res: FastifyReply): Promise<void> {
    const { token } = req.body as requestSchema
    void res.status(200).send({
      message: 'Login successful',
      token
    })
  }
}

export default new UserController()
