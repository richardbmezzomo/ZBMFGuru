import { saveForecastData } from '../services/forecastService.js'

export const forecastController = async (req, res) => {
  const lat = -27.4496
  const lng = -48.3882

  try {
    await saveForecastData(lat, lng)
    res
      .status(200)
      .send('Dados da previsão salvos com sucesso no banco de dados!')
  } catch (error) {
    console.error('Erro ao salvar dados da previsão:', error.message)
    res.status(500).send('Erro ao salvar dados da previsão.')
  }
}
