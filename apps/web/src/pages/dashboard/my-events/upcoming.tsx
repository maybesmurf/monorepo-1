import { getLayout } from "@Components/layouts/Dashboard"
import { SimpleGrid, Loader, Title, Pagination } from "@Components/shared"
import { EventCard } from "@Components/molecules"
import fetch from "@Utils/fetch"
import { useQuery } from "react-query"
import { Trial } from "@prisma/client"
import { useState } from "react"

const TRIALS_PER_PAGE = 9

const UpcomingTrials = () => {
	const [page, setPage] = useState(1)
	const { isLoading, data, error } = useQuery<{ count: number; trials: Trial[] }, FetchError>(
		`/v1/trials?page=${page}&take=${TRIALS_PER_PAGE}`,
		async () => {
			const result = await fetch.get(`/v1/trials?page=${page}&take=${TRIALS_PER_PAGE}`).catch((err) => {
				throw err
			})

			return result
		}
	)

	if (error) {
		return <p>Error, dude. {JSON.stringify(error)}</p>
	}

	if (isLoading) return <Loader />

	return (
		<SimpleGrid cols={1} style={{ gap: "2rem" }}>
			<Title>Upcoming Events</Title>
			<SimpleGrid
				breakpoints={[
					{ minWidth: 0, cols: 1 },
					{ minWidth: "sm", cols: 2 },
					{ minWidth: "md", cols: 3 }
				]}
				cols={3}
			>
				{data?.trials.map((trial) => {
					return (
						<EventCard
							key={trial.id}
							dateRange={{ start: new Date(), end: new Date() }}
							eventTitle={trial.title}
							imageAlt={trial.title}
							imageUrl={trial.imageUrl}
							status="registered"
							userRole="dog owner"
							location={`${trial.venueCity}, ${trial.venueState}`}
						/>
					)
				})}
			</SimpleGrid>
			{data && (
				<Pagination
					onChange={(page) => {
						const newPage = Math.max(1, Math.min(page, Math.ceil(data.count / TRIALS_PER_PAGE)))
						setPage(newPage)
					}}
					page={page}
					total={Math.max(data.count / TRIALS_PER_PAGE) + 1}
				/>
			)}
		</SimpleGrid>
	)
}

UpcomingTrials.getLayout = getLayout

export default UpcomingTrials
