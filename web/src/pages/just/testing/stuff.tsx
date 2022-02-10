import { useState } from "react"
import type { NextPage } from "next"
import { useQuery } from "react-query"
import fetch from "src/utils/fetch"
import { Title, Table, Button } from "@mantine/core"
import { DatePicker } from "@mantine/dates"

const MantineTesting: NextPage = () => {
	const [fetchIt, setFetchIt] = useState(false)

	const { data, isLoading, error, refetch } = useQuery<Dog[]>("all-dogs", () => fetch.get("/v1/dogs"), {
		enabled: fetchIt
	})

	if (error) return <p>Error: {error}</p>
	if (isLoading) return <p>Loading..........</p>

	const rows = data
		? data.map((dog: Dog) => (
				<tr key={dog.id}>
					<td>{dog.callName}</td>
					<td>{dog.birthdate}</td>
					<td>{dog.handler ?? "none provided"}</td>
					<td>{dog.sex}</td>
				</tr>
		  ))
		: []

	if (!data) return <button onClick={() => setFetchIt(true)}>Do the fetch</button>

	return (
		<div>
			<Button onClick={() => refetch()}>Refetch</Button>
			<Title>All Dogs</Title>
			<Table>
				<thead>
					<tr>
						<th>Call Name</th>
						<th>Birthdate</th>
						<th>Handler</th>
						<th>Sex</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>

			<DatePicker />
		</div>
	)
}

export default MantineTesting
