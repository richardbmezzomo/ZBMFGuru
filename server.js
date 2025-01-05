import express from 'express'
import { connectDB } from './src/config/db.js'
import forecastRoutes from './src/routes/forecastRoutes.js'

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('hello zbmf')
})

app.use('/', forecastRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
