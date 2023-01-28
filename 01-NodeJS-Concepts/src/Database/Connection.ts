/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Client } from 'pg'
const client = new Client({
  user: 'postgres',
  host: '172.28.0.2',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})

client.connect(function (err: Error) {
  if (err) throw err
  console.log('Connected!')
})

export default client
