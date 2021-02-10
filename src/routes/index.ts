import { Express } from 'express'
import { authenticatedRoutes } from './AuthenticatedRoutes'
import { routes } from './Routes'

export function Router(app?: Express) {
  if (app) {
    app.use(routes)
    app.use(authenticatedRoutes)
  }
  return { routes, authenticatedRoutes }
}
