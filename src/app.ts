import cors from 'cors'
import express from 'express'
import { Router } from './routes'

const app = express()

// Default configs
app.use(express.json())
app.use(cors())

// Assign routes
Router(app)

export { app }
