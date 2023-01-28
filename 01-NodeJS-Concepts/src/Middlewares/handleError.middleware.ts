import { type NextFunction, type Request, type Response } from 'express'
import type RestError from '../Errors/CustomErrors'

export default function handleError (
  err: Error | RestError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response | undefined {
  if ('statusCode' in err) {
    const { statusCode, message } = err
    return res.status(statusCode).json({
      message
    })
  }
  console.log(err)
  res.status(500).json({
    message: 'Something went wrong'
  })
}
