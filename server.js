import express from 'express'
import { connectDB } from './src/config/db.js'
import { saveForecastToMongo } from './src/controllers/forecastController.js'

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('hello zbmf')
})

app.get('/save-forecast', async (req, res) => {
  const lat = -27.4496
  const lng = -48.3882

  try {
    await saveForecastToMongo(lat, lng)
    res
      .status(200)
      .send('Dados da previsão salvos com sucesso no banco de dados!')
  } catch (error) {
    console.error('Erro ao salvar dados da previsão:', error.message)
    res.status(500).send('Erro ao salvar dados da previsão.')
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
