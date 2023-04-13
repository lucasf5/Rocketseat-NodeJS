import fastify from 'fastify'
import { routes } from './Routes'
const app = fastify()

routes(app)

export { app }
