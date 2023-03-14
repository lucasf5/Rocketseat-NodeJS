import { type FastifyReply, type FastifyRequest } from 'fastify'
import bcrypt from 'bcrypt'
import { z } from 'zod'

interface requestSchema {
  name: string
  email: string
  token: string
}

export const HashPassword = async (req: FastifyRequest, res: FastifyReply, next: any): Promise<void> => {
  const passwordSchema = z.object({
    password: z.string().min(6)
  })
  const { password } = passwordSchema.parse(req.body)
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  req.body = { ...req.body as requestSchema, password: hash }
  next()
}
