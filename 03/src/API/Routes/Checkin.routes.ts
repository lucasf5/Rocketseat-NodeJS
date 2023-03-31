import { type FastifyInstance } from 'fastify'
import { CheckinController } from '../Controller/Checkin.controller'

export const checkinRouter = async (app: FastifyInstance): Promise<void> => {
  const checkinController = new CheckinController()
  app.get('/', checkinController.findAll)
  app.post('/', checkinController.register)
}
