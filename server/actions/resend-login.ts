"use server"

import { signIn } from "@/server/auth"

export default async function resendLogin(formData: FormData) {
  console.log(formData)
  await signIn("resend", formData)
}
