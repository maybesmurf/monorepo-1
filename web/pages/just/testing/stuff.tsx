import type { NextPage } from "next"
import { useQuery } from "react-query"
import fetch from "@Utils/fetch"
import { useState } from "react"
import { Title, Table, Stepper } from "@mantine/core"

const MantineTesting: NextPage = () => {
	const [active, setActive] = useState(1)
	const { data, isLoading, error } = useQuery<Dog[]>("all-dogs", () => fetch.get("/v1/dogs"))

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

	return (
		<div>
			{/* <Title>All Dogs</Title>
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
			</Table> */}

			<Stepper active={active} styles={{ step: { flexDirection: "column" } }}>
				<Stepper.Step label="Fist step">Step 1 content: Create an account</Stepper.Step>
				<Stepper.Step label="Second step">Step 2 content: Verify email</Stepper.Step>
				<Stepper.Step label="Final step">Step 3 content: Get full access</Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>
		</div>
	)
}

export default MantineTesting
