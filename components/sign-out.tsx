import { signOut } from "@/server/auth"

export default function SignOutPage() {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}
