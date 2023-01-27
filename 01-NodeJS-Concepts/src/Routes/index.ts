import express, { type Application } from 'express'
import HomeRouter from './Home'

const Router = (app: Application): void => {
  app.use(express.json(), HomeRouter)
}

export default Router
