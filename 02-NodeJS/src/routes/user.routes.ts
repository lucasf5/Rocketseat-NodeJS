/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FastifyInstance } from 'fastify'
import UserController from '../controllers/User.controller'
import { generateToken } from '../middlewares/GenerateToken'
import { HashPassword } from '../middlewares/HashPassword'

export const userRouter = async (app: FastifyInstance): Promise<void> => {
  app.get('/', UserController.index)
  app.get('/:id', UserController.show)
  app.post('/', { preHandler: HashPassword }, UserController.store)
  app.delete('/:id', UserController.destroy)
  app.post('/login', { preHandler: generateToken }, UserController.login)
}
