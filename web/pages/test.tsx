// import Login from "components/Login"
import { Table } from "@mantine/core"
import type { NextPage } from "next"
import { useQuery } from "react-query"
// import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const { data, isLoading, error } = useQuery("test", async () => await fetch.get("/v1/dogs"))
	const {
		data: shouldntGetAny,
		isLoading: loadingtheErr,
		error: err
	} = useQuery("err", async () => await fetch.get("/native-error"))

	if (err) return <p>Err: {JSON.stringify(err)}</p>

	if (isLoading) return <p>Fetching your pupperoonis...</p>
	if (error) return <p>Uh oh, a problem occurred.</p>

	const rows = data.map((dog: any) => (
		<tr key={dog.id}>
			<td>{dog.position}</td>
			<td>{dog.callName}</td>
			<td>{dog.symbol}</td>
			<td>{dog.mass}</td>
		</tr>
	))

	return (
		<div>
			<p style={{ marginBottom: "32px" }}></p>
			<Table>
				<thead>
					<tr>
						<th>Element position</th>
						<th>Element name</th>
						<th>Symbol</th>
						<th>Atomic mass</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	)
}

export default Home
