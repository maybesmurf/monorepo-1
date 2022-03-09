import Link from "next/link"
import { EventCard } from "@Components/molecules"
import { Flexbox, SimpleGrid, Title, Text, Container, Button, useMantineTheme } from "@Components/shared"
import { getLayout } from "@Components/layouts/Dashboard"
import { Placeholder } from "@Components/shared/Placeholder"
import { useAuthSession } from "@Hooks/useAuthSession"

const UPCOMING_EVENTS = [
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle: "s",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewhere",
		onClick: () => {}
	},
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle: "something",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewhere",
		onClick: () => {}
	},
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle: "somethi lasejfas",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewhere",
		onClick: () => {}
	}
]

const DashboardPage = () => {
	const { colors } = useMantineTheme()
	const { authUser } = useAuthSession()

	return (
		<SimpleGrid cols={1} style={{ gap: "2rem" }}>
			<Title order={1}>Welcome back, {authUser?.name?.split(" ")[0]}!</Title>
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

			<SimpleGrid
				breakpoints={[
					{
						minWidth: 0,
						cols: 1
					},
					{
						minWidth: 576,
						cols: 2
					},
					{
						minWidth: 950,
						cols: 3
					}
				]}
				cols={3}
			>
				{UPCOMING_EVENTS.map((event) => {
					return <EventCard key={event.eventTitle} {...event} />
				})}
			</SimpleGrid>

			<Title order={2}>Host a Trial</Title>
			<Container fluid style={{ textAlign: "center", background: colors.teal[1], padding: "2rem" }}>
				<Title order={3}>Ready to host your own event?</Title>
				<Text style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
					Be sure to have your trial details handy (i.e. addresses, contact information, pricing, and class offerings).
				</Text>
				<Button asLink size="sm" radius="lg">
					Create a Trial
				</Button>
			</Container>

			<Flexbox style={{ padding: 0 }} fluid direction="row" alignItems="center" justifyContent="space-between">
				<Title order={2}>Events Nearby</Title>
				<Link href="/dashboard/my-events/near-me" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Flexbox>
			<SimpleGrid
				breakpoints={[
					{
						minWidth: 0,
						cols: 1
					},
					{
						minWidth: 576,
						cols: 2
					},
					{
						minWidth: 950,
						cols: 3
					}
				]}
				cols={3}
			>
				{UPCOMING_EVENTS.map((event) => {
					return <EventCard key={event.eventTitle} {...event} />
				})}
			</SimpleGrid>
		</SimpleGrid>
	)
}

DashboardPage.getLayout = getLayout

export default DashboardPage
