import path from 'path'
import express from 'express'
import { useExpressServer } from 'routing-controllers'
import { authorizationChecker } from './app/middleware/authorization-checker'
import { currentUserChecker } from './app/middleware/current-user-checker'
import { Config } from './config'

const bootstrap = () => {
  const app = express()
  app.use(express.json())

  useExpressServer(app, {
    cors: true,
    defaultErrorHandler: true,
    controllers: [path.join(__dirname, 'app/controllers/**/*.ts')],
    authorizationChecker,
    currentUserChecker,
  })

  app.listen(Config.apiPort, () =>
    console.log(`Listening on port ${Config.apiPort}`),
  )
}

bootstrap()
