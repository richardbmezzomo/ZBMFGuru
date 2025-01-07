import express from 'express'
import { connectDB } from './src/config/db.js'
import forecastRoutes from './src/routes/forecastRoutes.js'
import getForecasts from './src/routes/getForecasts.js'

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('hello zbmf')
})

app.use('/', forecastRoutes)
app.use('/', getForecasts)

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
