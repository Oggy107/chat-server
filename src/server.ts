import 'dotenv/config'
import express, { Express } from 'express'
import cors from 'cors'

import { PORT } from './constants'
import AuthRouter from './routes/auth'

const app: Express = express()

app.use(cors())
app.use(AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})