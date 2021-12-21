import express, { Request, Response } from 'express'
import path from 'path'

const app = express()

const {
  PORT = 3000,
} = process.env

app.use(express.static(path.join(__dirname, 'web')))

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})