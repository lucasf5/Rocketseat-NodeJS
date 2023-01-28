import type Book from 'Interfaces/Book'
import BookModel from 'Models/Book'
import CustomError from 'Errors/CustomErrors'
import statusCodes from 'statusCodes'

class BookService {
  public async getBooks (): Promise<Error | Book[]> {
    const result = await BookModel.Find()

    if (result instanceof Error) {
      throw new CustomError('No books found', statusCodes.BAD_REQUEST)
    }

    return result
  }

  public async createBook (book: Book): Promise<Error | Book> {
    const {
      isbn,
      longdescription,
      pagecount,
      shortdescription,
      status,
      title
    } = book

    const result = await BookModel.Create({
      isbn,
      longdescription,
      pagecount,
      shortdescription,
      status,
      title
    })

    if (result instanceof Error) {
      throw new CustomError('Book could not be created', statusCodes.BAD_REQUEST)
    }

    return book
  }

  public async getBookByTitle (title: string): Promise<Error | Book[]> {
    const result = await BookModel.findByTitle(title)

    if (result instanceof Error) {
      throw new CustomError('No books found', statusCodes.BAD_REQUEST)
    }

    return result
  }
}

export default new BookService()
