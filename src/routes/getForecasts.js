import express from 'express'
import { getForecastController } from '../controllers/getForecastController.js'

const router = express.Router()

router.get('/forecast', getForecastController)

export default router
