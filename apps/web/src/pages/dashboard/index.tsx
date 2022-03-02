import Link from "next/link"
import { Flexbox, SimpleGrid, Title, Text } from "@Components/shared"
import { getLayout } from "@Components/layouts/Dashboard"
import { Placeholder } from "@Components/shared/Placeholder"

const DashboardPage = () => {
	return (
		<SimpleGrid cols={1} style={{ gap: "2rem" }}>
			<Title order={1}>Welcome back, User!</Title>
			<Title order={2}>Current Event</Title>
			<Placeholder message="You have no upcoming events." />
			<Title order={2}>Latest Results</Title>
			<Placeholder message="You have no upcoming events." />
			<Flexbox style={{ padding: 0 }} fluid direction="row" alignItems="center" justifyContent="space-between">
				<Title order={2}>Upcoming Events</Title>
				<Link href="/dashboard/my-events/upcoming" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Flexbox>
			<Flexbox style={{ padding: 0 }} fluid direction="row" alignItems="center" justifyContent="space-between">
				<Title order={2}>Events Nearby</Title>
				<Link href="/dashboard/my-events/near-me" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Flexbox>
		</SimpleGrid>
	)
}

DashboardPage.getLayout = getLayout

export default DashboardPage
