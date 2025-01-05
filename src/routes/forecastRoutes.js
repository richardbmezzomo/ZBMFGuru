import express from 'express'
import { saveForecastController } from '../controllers/saveForecastController.js'

const router = express.Router()

router.get('/save-forecast', saveForecastController)

export default router
