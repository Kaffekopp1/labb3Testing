import cors from 'cors'
import express, { Response, Request } from 'express'
import * as dotenv from 'dotenv'
import { Client } from 'pg'

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
  const { articleText, articleAuthor }: article = req.body

  const { rows } = await client.query<Serverarticle>(
    `INSERT INTO articles (article_text, article_author) VALUES ($1, $2) RETURNING *`,
    [articleText, articleAuthor]
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
