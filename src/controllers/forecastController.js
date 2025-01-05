import Forecast from '../models/Forecast'
import { fetchStormGlassData } from '../services/stormGlassService'

export const saveForecastToMongo = async (lat, lng) => {
  try {
    const data = await fetchStormGlassData(lat, lng)
    const forecasts = data.hours

    for (const forecast of forecasts) {
      const forecastData = {
        time: forecast.time,
        secondarySwell: {
          direction: forecast.secondarySwellDirection?.noaa,
          height: forecast.secondarySwellHeight?.noaa,
          period: forecast.secondarySwellPeriod?.noaa,
        },
        swell: {
          direction: forecast.swellDirection?.noaa,
          height: forecast.swellHeight?.noaa,
          period: forecast.swellPeriod?.noaa,
        },
        wave: {
          direction: forecast.waveDirection?.noaa,
          height: forecast.waveHeight?.noaa,
          period: forecast.wavePeriod?.noaa,
        },
        wind: {
          direction: forecast.windDirection?.noaa,
          speed: forecast.windSpeed?.noaa,
          wave: {
            direction: forecast.windWaveDirection?.noaa,
            height: forecast.windWaveHeight?.noaa,
            period: forecast.windWavePeriod?.noaa,
          },
        },
      }

      await Forecast.findOneAndUpdate(
        { time: forecastData.time },
        forecastData,
        {
          upsert: true,
          new: true,
        },
      )
    }

    console.log('Dados salvos no MongoDB com sucesso!')
  } catch (error) {
    console.error(`Erro ao salvar previsões no MongoDB: ${error.message}`)
  }
}
