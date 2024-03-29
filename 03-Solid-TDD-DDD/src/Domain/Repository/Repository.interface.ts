export default interface Repository<T> {
  findAll: () => Promise<T[]>
  findById: (id: string) => Promise<T | null>
  create: (data: any) => Promise<T>
  update: (id: string, data: T) => Promise<T>
  delete: (id: string) => Promise<void>
}
