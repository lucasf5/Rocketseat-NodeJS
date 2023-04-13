import { type FastifyInstance } from 'fastify'
import { userRouter } from './User.routes'
import { checkinRouter } from './Checkin.routes'

export const routes = (app: FastifyInstance): void => {
  void app.register(userRouter, { prefix: '/users' })
  void app.register(checkinRouter, { prefix: '/checkins' })
}
