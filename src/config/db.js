import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongodb conectado: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`)
    process.exit(1)
  }
}
