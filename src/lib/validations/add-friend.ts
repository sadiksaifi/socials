import { z } from "zod"

const addFriendValidator = z.object({
  email: z.string().email(),
})

export default addFriendValidator
