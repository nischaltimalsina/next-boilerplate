import * as z from "zod"

export const userAuthSchema = z.object({
  username: z.string().min(1, "Please enter your Username"),
  password: z.string().min(1, "Please enter your password"),
})
