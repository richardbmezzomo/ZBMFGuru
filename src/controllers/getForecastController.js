import Forecast from '../models/Forecast'

export const getForecastController = (req, res) => {
  try {
    const forecasts = Forecast.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              // Data inicial: início do dia atual
              {
                $gte: [
                  '$time',
                  {
                    $dateTrunc: {
                      date: {
                        $dateSubtract: {
                          startDate: '$$NOW',
                          unit: 'hour',
                          amount: 3,
                        },
                      },
                      unit: 'day',
                    },
                  },
                ],
              },
              // Data final: 7 dias após a data inicial
              {
                $lt: [
                  '$time',
                  {
                    $dateAdd: {
                      startDate: {
                        $dateTrunc: {
                          date: {
                            $dateSubtract: {
                              startDate: '$$NOW',
                              unit: 'hour',
                              amount: 3,
                            },
                          },
                          unit: 'day',
                        },
                      },
                      unit: 'day',
                      amount: 7,
                    },
                  },
                ],
              },
              // Horários de 00:00 a 21:00
              { $gte: [{ $hour: '$time' }, 0] },
              { $lte: [{ $hour: '$time' }, 21] },
              // Horários divisíveis por 3
              { $eq: [{ $mod: [{ $hour: '$time' }, 3] }, 0] },
            ],
          },
        },
      },
      {
        $sort: { time: 1 }, // Ordena os resultados por horário
      },
    ])

    if (!forecasts || forecasts.lenght === 0) {
      return res.status(404).json({ message: 'Nenhuma previsão encontrada' })
    }

    return res.status(200).json(forecasts)
  } catch (error) {
    console.error('Erro ao buscar previsões:', error.message)
    res
      .status(500)
      .json({ message: 'Erro ao buscar previsões', error: error.message })
  }
}
