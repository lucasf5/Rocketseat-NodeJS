import UserBookController from '../controllers/UserBook.controller'
import { type FastifyInstance } from 'fastify'
import { checkIdentity } from '../middlewares/CheckIdentity'

export const userBookRouter = async (app: FastifyInstance): Promise<void> => {
  app.get('/', UserBookController.index)
  app.post('/', { preHandler: checkIdentity }, UserBookController.store)
  app.get('/:id', UserBookController.show)
}
