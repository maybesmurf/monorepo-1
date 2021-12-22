import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const [name, setName] = useState("")
	const { data, isFetching, refetch } = useQuery("test", async () => await fetch.get("http://localhost:5000/all"))
	const { mutate, isSuccess } = useMutation(
		"mutate",
		async () =>
			await fetch.post("http://localhost:5000/create", {
				name
			})
	)

	useEffect(() => {
		if (isSuccess) refetch()
	}, [isSuccess])

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name for the DB" />
			<button onClick={() => mutate()}>Make an update</button>
			<p>{isFetching ? <p>Loading...</p> : JSON.stringify({ data })}</p>
		</div>
	)
}

export default Home
