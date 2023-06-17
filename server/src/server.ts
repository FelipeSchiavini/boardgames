import { useExpressServer } from 'routing-controllers'
import express from 'express'
// import path from 'path'
import { authorizationChecker } from './app/middleware/authorization-checker'
import { AuthController } from './app/controllers/auth.controllers'
const dotenv = require('dotenv')
dotenv.config()

const bootstrap = () => {
  const app = express()
  app.use(express.json())

  useExpressServer(app, {
    cors: true,
    defaultErrorHandler: true,
    // controllers: [path.join(__dirname, 'app/controllers/**/*.ts')],
    controllers: [AuthController],
    authorizationChecker,
  })

  app.listen(3333, () => console.log('Listening on port 3333'))
}

bootstrap()
