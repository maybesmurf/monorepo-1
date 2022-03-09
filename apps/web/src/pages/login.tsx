import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Login = () => {
	const router = useRouter()
	const { status } = useSession()

	useEffect(() => {
		if (status === "authenticated") router.push("/dashboard")
	}, [status, router])

	return (
		<div>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	)
}

export default Login
