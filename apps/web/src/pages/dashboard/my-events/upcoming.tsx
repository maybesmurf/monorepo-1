import { getLayout } from "@Components/layouts/Dashboard"
import { Grid, Loader } from "@Components/shared"
import { EventCard } from "@Components/molecules"
import fetch from "@Utils/fetch"
import { useQuery } from "react-query"

const UpcomingTrials = () => {
	const { refetch, isLoading, isFetching, data, error } = useQuery("/v1/trials", async () => {
		const result = fetch.get("/v1/trials").catch((err) => {
			throw err
		})

		return result
	})

	if (error) {
		return <p>Error, dude. {JSON.stringify(error)}</p>
	}

	if (isLoading) return <Loader />

	return (
		<p>{JSON.stringify(data)}</p>
		// <Grid align="center" justify="center">
		// 	{/* <Grid.Col md={4}>test</Grid.Col>
		// 	<Grid.Col md={4}>test</Grid.Col>
		// 	<Grid.Col md={4}>test</Grid.Col> */}
		// </Grid>
	)
}

UpcomingTrials.getLayout = getLayout

export default UpcomingTrials
