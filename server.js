import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello zbmf')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
