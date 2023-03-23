import { type FastifyInstance } from 'fastify'
import { userRouter } from './User.routes'

export const routes = (app: FastifyInstance): void => {
  void app.register(userRouter, { prefix: '/users' })
}
