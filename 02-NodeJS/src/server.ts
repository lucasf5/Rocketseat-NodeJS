import { env } from './env'
import { app } from './app'

const PORT: string = env.PORT

app.listen({ port: parseInt(PORT) }, (_err, address) => {
  console.log(`Server listening at ${address}`)
})
