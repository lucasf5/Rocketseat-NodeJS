import { type FastifyInstance } from 'fastify'
import { UserController } from '../Controller/User.controller'

export const userRouter = async (app: FastifyInstance): Promise<void> => {
  const userController = new UserController()
  app.get('/', userController.findAll)
  app.post('/', userController.register)
  app.get('/:id', userController.findById)
  app.put('/:id', userController.update)
  app.delete('/:id', userController.delete)
}
