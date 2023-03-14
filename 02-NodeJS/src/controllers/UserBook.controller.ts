import { type FastifyReply, type FastifyRequest } from 'fastify'
import UserBook from '../models/UserBook/UserBook'
import Book from '../models/Book/Book'
import User from '../models/User/User'

class UserBookController {
  public async index (_req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const userBooks = await UserBook.findAll({
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          { model: Book }
        ],
        attributes: { exclude: ['userId', 'bookId'] }
      })

      void res.status(200).send(userBooks)
    } catch (err) {
      console.error(err)
      void res.status(500).send({ message: 'Internal server error' })
    }
  }

  public async store (req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const { bookId, decoded } = req.body as { bookId: number, decoded: { email: string } }

      const userId = await User.findOne({ where: { email: decoded.email } })

      const user = await UserBook.create({
        userId: userId?.id,
        bookId
      })

      void res.status(201).send(user)
    } catch (err) {
      console.error(err)
      void res.status(500).send({ message: 'Internal server error' })
    }
  }

  public async show (req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const { id } = req.params as { id: string }

      const userBook = await UserBook.findByPk(id, {
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          { model: Book }
        ],
        attributes: { exclude: ['userId', 'bookId'] }
      })

      void res.status(200).send(userBook)
    } catch (err) {
      console.error(err)
      void res.status(500).send({ message: 'Internal server error' })
    }
  }
}

export default new UserBookController()
