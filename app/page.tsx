import { SignIn } from "@/components/sign-in"
import SignOut from "@/components/sign-out"
import { auth } from "@/server/auth"

export default async function Home() {
  const session = await auth()
  if (!session)
    return (
      <main className="flex flex-col items-center py-12">
        <SignIn />
      </main>
    )
  return (
    <main className="flex flex-col items-center py-12">
      <h1 className="">Welcome {session.user?.email}</h1>
      <SignOut />
    </main>
  )
}
