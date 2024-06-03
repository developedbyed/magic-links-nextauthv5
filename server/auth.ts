import NextAuth from "next-auth"
import { db } from "@/server"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { accounts, verificationTokens, users } from "@/server/schema"
import GitHub from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    usersTable: users,
    verificationTokensTable: verificationTokens,
  }),
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHub,
    Resend({
      from: "deved@sproutscribble.store",
    }),
  ],
})
