import type { Gyn } from '@prisma/client'
import type Repository from './Repository.interface'

export interface GynRepositoryInterface extends Repository<Gyn> { }
