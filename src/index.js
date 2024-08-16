import express from 'express'
import morgan from "morgan"
import { PORT } from './config/config.js'
import routesUser from './Routes/users.routes.js'
import routesAuth from './Routes/auth.routes.js'
import { validCors } from './middleware/cors.js'

import swaggerUi from'swagger-ui-express'
import swaggerFile from './../swagger-output.json' assert {type: 'json'}

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(validCors)
app.use('/api/user',routesAuth)
app.use('/api/user',routesUser)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerFile))



app.listen(PORT,()=>{console.log(`Servidor conectado http://localhost:${PORT}`)})