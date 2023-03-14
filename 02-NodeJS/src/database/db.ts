import { Sequelize } from 'sequelize-typescript'
import config from './config/config.json'
import { env } from '../env'

const envirement = env.NODE_ENV
const dbConfig = config[envirement as 'development' | 'test' | 'production']

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect as 'postgres'
  }
)

export default sequelize
