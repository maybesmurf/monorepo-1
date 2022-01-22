// import Login from "components/Login"
import type { NextPage } from "next"
import { useQuery } from "react-query"
// import SignUp from "../components/SignUp"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const {
		data: ping,
		isFetching: pingIsFetching,
		error: pingError
	} = useQuery("test", async () => await fetch.get("/"))

	return (
		<div>
			<p style={{ marginBottom: "32px" }}>
				<p>Can we ping the server?</p>
				{pingIsFetching ? <>Loading...</> : pingError ? <>Uh oh, we got problems.</> : <>{ping.data.message}</>}
			</p>
		</div>
	)
}

export default Home
