import express from 'express'
import { forecastController } from '../controllers/forecastController.js'
const router = express.Router()

router.get('/save-forecast', forecastController)

export default router
