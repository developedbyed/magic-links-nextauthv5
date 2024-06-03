import type { Config } from "drizzle-kit"
import * as dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "./server/schema.ts",
  out: "./server/migrations",
  driver: "pg",

  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string,
  },
} satisfies Config
