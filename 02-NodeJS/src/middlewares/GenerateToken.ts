import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { env } from '../env'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import User from '../models/User/User'
import bcrypt from 'bcrypt'

interface requestSchema {
  name: string
  email: string
  password: string
  token: string
}

export const generateToken = async (req: FastifyRequest, res: FastifyReply, next: any): Promise<void> => {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = bodySchema.parse(req.body)

  const user = await User.findOne({ where: { email } })

  if (user == null) {
    void res.status(404).send({ message: 'User not found' })
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      void res.status(401).send({ message: 'Invalid password' })
    } else {
      const token = jwt.sign({ email, password }, env.SECRET_KEY, {
        expiresIn: '7d'
      })

      req.body = { ...req.body as requestSchema, token }
      next()
    }
  }
}
