import client from 'Database/Connection'
import CustomError from 'Errors/CustomErrors'
import type Book from 'Interfaces/Book'

class BookModel {
  public async Find (): Promise<Book[] | Error> {
    try {
      const results = await client.query('SELECT * FROM books')
      if (results.rowCount === 0) {
        return new CustomError('No books found', 400)
      }
      return results.rows
    } catch (err: any) {
      return err
    }
  }

  public async Create (book: Book): Promise<any> {
    const {
      isbn,
      longdescription,
      pagecount,
      shortdescription,
      status,
      title
    } = book
    try {
      const result = await client.query(
        'INSERT INTO books (isbn, longDescription, pageCount, shortDescription, status, title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [isbn, longdescription, pagecount, shortdescription, status, title]
      )
      return result
    } catch (err) {
      return err
    }
  }

  public async findByTitle (title: string): Promise<Book[] | Error> {
    try {
      const result = await client.query(
        `SELECT * FROM books WHERE title LIKE '%${title}%'`
      )
      if (result.rowCount === 0) {
        return new CustomError('No books found', 400)
      }
      return result.rows
    } catch (err: any) {
      return err
    }
  }
}

export default new BookModel()
