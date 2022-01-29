// import Login from "components/Login"
import type { NextPage } from "next"
import { useQuery } from "react-query"
// import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const { data, isFetching, error } = useQuery("test", async () => await fetch.get("/"))

	return (
		<div>
			<div style={{ marginBottom: "32px" }}>
				<p>Can we ping the server?</p>
				{isFetching ? <p>Loading...</p> : error ? <>Uh oh, we got problems.</> : <p>{JSON.stringify(data)}</p>}
			</div>
			{/* <Container>
				<Select
					size="xs"
					radius="xl"
					initiallyOpened
					label="Choose employee of the month"
					placeholder="Pick one"
					data={[
						{ value: "rick", label: "Rick", group: "Used to be a pickle" },
						{ value: "morty", label: "Morty", group: "Never was a pickle" },
						{ value: "beth", label: "Beth", group: "Never was a pickle" },
						{ value: "summer", label: "Summer", group: "Never was a pickle" }
					]}
					searchable
					maxDropdownHeight={400}
					nothingFound="Nobody here"
				/>
			</Container> */}
		</div>
	)
}

export default Home
