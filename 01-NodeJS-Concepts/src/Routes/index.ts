import express, { type Application } from 'express'
import HomeRouter from './Home'
import handleError from 'Middlewares/handleError.middleware'
import BookRouter from './Book.routes'

const Router = (app: Application): void => {
  app.use(express.json(), HomeRouter, BookRouter)
  app.use(handleError)
}

export default Router
