import { z } from "zod"

export const postSchema = z.object({
  description: z.string(),
  title: z.string(),
})
