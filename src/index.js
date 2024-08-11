import express from 'express'
import morgan from "morgan"
import { PORT } from './config/config.js'
import { createNewUser, editNewUser, userInfo } from './controllers/user.controller.js'
import { loginEmail } from './controllers/auth.controller.js'
import { info, verifyToken } from './middleware/verifyToken.js'
import routesUser from './Routes/users.routes.js'
import routesAuth from './Routes/auth.routes.js'
import { validCors } from './middleware/cors.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(validCors)
app.use('/api/user',routesAuth)
app.use('/api/user',routesUser)


app.listen(PORT,()=>{console.log(`Servidor conectado http://localhost:${PORT}`)})