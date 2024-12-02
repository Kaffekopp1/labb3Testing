import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { Client } from 'pg'

const app = express()

app.use(cors())

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

app.get('/api', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM articles')

  response.send(rows)
})

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})
