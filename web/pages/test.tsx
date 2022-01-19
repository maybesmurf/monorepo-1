// import Login from "components/Login"
import { Table } from "@mantine/core"
import type { NextPage } from "next"
import { useQuery } from "react-query"
// import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const { data, isLoading, error } = useQuery("test", async () => await fetch.get("/v1/dogs"))

	if (isLoading) return <p>Fetching your pupperoonis...</p>
	if (error) return <p>Uh oh, a problem occurred.</p>

	const rows = data.map((dog: Dog) => (
		<tr key={dog.id}>
			<td>{dog.callName}</td>
			<td>{dog.akcBreed}</td>
			<td>{dog.isOfficiallyMeasured}</td>
			<td>{dog.akcMeasuredHeight}</td>
		</tr>
	))

	return (
		<div>
			<p style={{ marginBottom: "32px" }}></p>
			<Table>
				<thead>
					<tr>
						<th>Call Name</th>
						<th>AKC Breed</th>
						<th>Officially Measured?</th>
						<th>AKC Measured Height</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	)
}

export default Home
