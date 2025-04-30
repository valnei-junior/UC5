import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg

dotenv.config()
const client = new Pool({
  user: process.env.DB_USER ,
  host: process.env.DB_HOST,     
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME 
})

export default client