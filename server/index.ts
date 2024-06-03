import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "@/server/schema"
// for query purposes
const queryClient = postgres(process.env.POSTGRES_URL!)
export const db = drizzle(queryClient, { schema })
