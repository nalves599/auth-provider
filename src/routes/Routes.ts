import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response, next) => {
  return response.send('Hello World!')
})

export { routes }
