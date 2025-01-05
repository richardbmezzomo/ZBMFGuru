import axios from 'axios'

export const fetchStormGlassData = async (lat, lng) => {
  const apiKey = process.env.STORM_GLASS_API_KEY
  const url = 'https://api.stormglass.io/v2/weather/point'

  try {
    const response = await axios.get(url, {
      params: {
        lat,
        lng,
        params: [
          'swellDirection',
          'swellHeight',
          'swellPeriod',
          'secondarySwellDirection',
          'secondarySwellHeight',
          'secondarySwellPeriod',
          'waveDirection',
          'waveHeight',
          'wavePeriod',
          'windWaveDirection',
          'windWaveHeight',
          'windWavePeriod',
          'windDirection',
          'windSpeed',
        ].join(','),
        source: 'noaa', // Fonte de dados
      },
      headers: {
        Authorization: apiKey,
      },
    })

    return response.data
  } catch (error) {
    console.error(`Erro ao buscar dados da Storm Glass: ${error.message}`)
    throw error
  }
}
