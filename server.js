import express from 'express'
import { connectDB } from './src/config/db.js'

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('hello zbmf')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
