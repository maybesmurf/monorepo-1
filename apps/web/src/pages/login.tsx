import { signIn } from "next-auth/react"
import { useAuthSession } from "@Hooks/useAuthSession"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Login = () => {
	const router = useRouter()
	const { authStatus } = useAuthSession()

	useEffect(() => {
		if (authStatus === "authenticated") router.push("/dashboard")
	}, [authStatus, router])

	return (
		<div>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	)
}

export default Login
