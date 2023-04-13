import { type FastifyRequest, type FastifyReply } from 'fastify'
import type RestError from '../Errors/CustomErrors'

export default function handleError (
  err: Error | RestError,
  _req: FastifyRequest,
  res: FastifyReply
): any {
  if ('statusCode' in err) {
    return res.status(err.statusCode).send({
      message: err.message
    })
  }

  void res.status(500).send({
    message: 'Something went wrong'
  })
}
