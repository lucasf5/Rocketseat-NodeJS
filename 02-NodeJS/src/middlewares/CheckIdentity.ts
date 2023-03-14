/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FastifyReply, type FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { env } from '../env'

export const checkIdentity = (req: FastifyRequest, res: FastifyReply, next: any): void => {
  const token = req.headers.authorization

  if (token == null) {
    void res.status(401).send({ message: 'No token provided' })
  } else {
    jwt.verify(token, env.SECRET_KEY, (err, decoded) => {
      if (err != null) {
        void res.status(500).send({ message: 'Failed to authenticate token' })
      }
      req.body = { ...req.body, decoded }
    })
    next()
  }
}
