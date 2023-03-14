import { type FastifyInstance } from 'fastify'
import { userRouter } from './user.routes'
import { userBookRouter } from './userbook.routes'

export const routes = (app: FastifyInstance): void => {
  void app.register(userRouter)
  void app.register(userBookRouter, { prefix: '/userbook' })
}
