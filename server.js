import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import logger from 'morgan'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url'

// DataBases //
import productRoutes from './routes/productRoutes.js'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

dotenv.config()

connectDB()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/', productRoutes)

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
  )
)
