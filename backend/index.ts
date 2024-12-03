import cors from 'cors'
import express, { Response, Request } from 'express'
import * as dotenv from 'dotenv'
import { Client } from 'pg'

interface articleInsert {
  articleText: string
  articleAuthor: string
  articleName: string
  categorieName: string
}

interface article {
  articleText: string
  articleAuthor: string
}
interface Serverarticle {
  id: number
  article_text: string
  article_author: string
}

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()
const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

app.post('/api', async (req, res: Response<Serverarticle[]>) => {
  const {
    articleText,
    articleAuthor,
    articleName,
    categorieName,
  }: articleInsert = req.body
  const { rows } = await client.query<Serverarticle>(
    `SELECT * FROM insert_articles($1, $2, $3, $4)`,
    [articleText, articleAuthor, articleName, categorieName]
  )
  res.send(rows)
})

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
