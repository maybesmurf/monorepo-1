// import Login from "components/Login"
import type { NextPage } from "next"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
// import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const [name, setName] = useState("")
	const {
		data: ping,
		isFetching: pingIsFetching,
		error: pingError
	} = useQuery("test", async () => await fetch.get("/"))

	const {
		data: nested,
		isFetching: nestedIsFetching,
		error: nestedError
	} = useQuery("test", async () => await fetch.get("/some/nested/route"))
	// const { data, isFetching, error, refetch } = useQuery("fetch-all-rows", async () => await fetch.get("/all"))
	// const {
	// 	mutate,
	// 	error: creationError,
	// 	isSuccess
	// } = useMutation("mutate", async () => {
	// 	await fetch.post("/create", {
	// 		name
	// 	})
	// })

	return (
		<div>
			<p>Test environment var: {process.env.NEXT_PUBLIC_TEST}</p>
			<p style={{ marginBottom: "32px" }}>
				Did we connect to the server?{" "}
				{pingIsFetching ? <>Loading...</> : pingError ? <>Uh oh, we got problems.</> : <>{ping.message}</>}
			</p>
			<p>Just a test update.</p>
			<p style={{ marginBottom: "32px" }}>
				Did we connect to the server?{" "}
				{nestedIsFetching ? <>Loading...</> : nestedError ? <>Uh oh, we got problems.</> : <>{nested.message}</>}
			</p>
			<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name for the DB" />
			{/* {creationError && <p>Error on create: {JSON.stringify(error)}</p>} */}
			{/* <button onClick={() => mutate()}>Make an update</button> */}
			{/* <button style={{ display: "block" }} onClick={() => refetch()}>
				{" "}
				Refetch all rows
			</button> */}
			{/* <div>{JSON.stringify(data)}</div> */}
			{/* <SignUp /> */}
			{/* <Login /> */}
		</div>
	)
}

export default Home
