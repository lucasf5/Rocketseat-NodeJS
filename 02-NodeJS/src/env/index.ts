import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  SECRET_KEY: z.string()
})

export const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid env', _env.error.format())

  process.exit(1)
}

export const env = _env.data
