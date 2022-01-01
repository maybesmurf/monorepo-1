import { useState } from "react"
import { useMutation } from "react-query"
import fetch from "@Utils/fetch"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const { mutate, data, error, isLoading } = useMutation("create-new-user", async () => {
		fetch.post("/create-new-user", {
			username,
			password
		})
	})

	if (isLoading) return <p>Signing you up...</p>
	if (error) return <p>Something bad happened.</p>
	if (data) return <p>You're signed up, bruv.</p>

	return (
		<div style={{ marginTop: "32px" }}>
			<h2>Login</h2>
			<input
				style={{ display: "block", margin: "4px" }}
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				style={{ display: "block", margin: "4px" }}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={() => mutate()}>Login</button>
		</div>
	)
}

export default Login
