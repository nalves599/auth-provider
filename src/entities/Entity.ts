import { v4 as uuid4 } from 'uuid'

export interface ITimestamps {
  createdAt: Date
  updatedAt: Date
}

export abstract class Entity {
  public readonly id: string
  public createdAt: Date
  public updatedAt: Date

  constructor(id?: string, timestamps?: ITimestamps) {
    this.id = id || uuid4()
    this.createdAt = timestamps?.createdAt || new Date()
    this.updatedAt = timestamps?.updatedAt || new Date()
  }
}
