import Book from 'Services/Book'
import { type NextFunction, type Request, type Response } from 'express'
import statusCodes from 'statusCodes'

class BookController {
  public async getBooks (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const books = await Book.getBooks()
      return res.status(statusCodes.OK).json(books)
    } catch (err) {
      next(err)
    }
  }

  public async createBook (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const book = req.body
    try {
      const result = await Book.createBook(book)
      res.status(statusCodes.CREATED).json({
        message: 'Created',
        result
      })
    } catch (err) {
      next(err)
    }
  }

  public async getBookByTitle (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { title } = req.params
    try {
      const result = await Book.getBookByTitle(title)
      res.status(statusCodes.OK).json(result)
    } catch (err) {
      next(err)
    }
  }
}

export default new BookController()
