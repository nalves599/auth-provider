import * as dotenv from 'dotenv'

dotenv.config()

export const NODE_ENV = process.env.ENV || 'node'
export const PORT = process.env.PORT || 8085

export default {
  NODE_ENV,
  PORT
}
