import mongoose from 'mongoose'

const forecastSchema = new mongoose.Schema({
  time: {
    type: Date,
    require: true,
    unique: true,
  },
  secondarySwell: {
    direction: { type: Number, require: false },
    height: { type: Number, require: false },
    period: { type: Number, require: false },
  },
  swell: {
    direction: { type: Number, require: false },
    height: { type: Number, require: false },
    period: { type: Number, require: false },
  },
  wave: {
    direction: { type: Number, require: false },
    height: { type: Number, require: false },
    period: { type: Number, require: false },
  },
  wind: {
    direction: { type: Number, required: false },
    speed: { type: Number, required: false },
    wave: {
      direction: { type: Number, require: false },
      height: { type: Number, require: false },
      period: { type: Number, require: false },
    },
  },
})

export default mongoose.model('Forecast', forecastSchema)
