import mysql, {Connection} from 'mysql'

import dotenv from 'dotenv'
dotenv.config()

export let connection: Connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  connectTimeout: 5000,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})