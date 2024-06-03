import resendLogin from "@/server/actions/resend-login"

export function SignIn() {
  return (
    <form className="flex flex-col items-center gap-2" action={resendLogin}>
      <input
        className="border p-2"
        type="text"
        name="email"
        placeholder="Email"
      />
      <button className="bg-blue-600 p-2 rounded-md text-white" type="submit">
        Signin with Resend
      </button>
    </form>
  )
}
