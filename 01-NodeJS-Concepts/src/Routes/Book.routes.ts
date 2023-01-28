/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'

import BookController from 'Controllers/Book'

const BookRouter = express.Router()

BookRouter
  .get('/books', BookController.getBooks)
  .post('/books', BookController.createBook)

export default BookRouter
