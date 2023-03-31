import type { CheckIn } from '@prisma/client'
import type Repository from './Repository.interface'

export interface CheckinRepositoryInterface extends Repository<CheckIn> {
}
