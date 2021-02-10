import { Entity } from '../../entities/Entity'

export interface IDefaultRepository<E extends Entity> {
  findById(id: string): Promise<E>
  findOne(queryObject: E): Promise<E>
  find(queryObject: E): Promise<E[]>
  findAll(): Promise<E[]>
  save(object: E): Promise<E>
  update(id: string, objects: E): Promise<E>
  updateAll(ids: string[], objects: E[]): Promise<E[]>
}
