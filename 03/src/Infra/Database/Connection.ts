import { env } from '@/API/env'
import { PrismaClient } from '@prisma/client'

export const connection = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : []
})
