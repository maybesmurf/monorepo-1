import Login from "components/Login"
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const [name, setName] = useState("")
	const { data, isFetching, refetch } = useQuery("test", async () => await fetch.get("/"))
	const { mutate, isSuccess } = useMutation(
		"mutate",
		async () =>
			await fetch.post("/create", {
				name
			})
	)

	useEffect(() => {
		if (isSuccess) refetch()
	}, [isSuccess])

	return (
		<div>
			<p style={{ color: "red" }}>Broken for now, need to configure Prisma...</p>
			<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name for the DB" />
			<button onClick={() => mutate()}>Make an update</button>
			<p>{isFetching ? <>Loading...</> : JSON.stringify({ data })}</p>
			<SignUp />
			<Login />
		</div>
	)
}

export default Home
