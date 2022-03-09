import Link from "next/link"
import { EventCard } from "@Components/molecules"
import { SimpleGrid, Grid, Group, Title, Text, Button, useMantineTheme } from "@Components/shared"
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
	const { colors, radius } = useMantineTheme()
	const { authUser } = useAuthSession()

	return (
		<SimpleGrid cols={1} style={{ gap: "2rem" }}>
			<Title order={1}>Welcome back, {authUser?.name?.split(" ")[0]}!</Title>
			<Title order={2}>Current Event</Title>
			<Placeholder message="You have no upcoming events." />
			<Title order={2}>Latest Results</Title>
			<Placeholder message="You have no upcoming events." />
			<Group position="apart">
				<Title order={2}>Upcoming Events</Title>
				<Link href="/dashboard/my-events/upcoming" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Group>
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
			<Grid
				gutter="xl"
				justify="flex-end"
				align="center"
				style={{ background: colors.teal[1], margin: 0, padding: "2rem", borderRadius: radius.lg }}
			>
				<Grid.Col md={6}>
					<Title order={3} style={{ textAlign: "center" }}>
						Ready to host your own event?
					</Title>
					<Text style={{ paddingTop: "1rem", paddingBottom: "2rem", width: "75%", margin: "0 auto" }}>
						Be sure to have your trial details handy (i.e. addresses, contact information, pricing, and class
						offerings).
					</Text>
				</Grid.Col>
				<Grid.Col md={6} style={{ textAlign: "center" }}>
					<Button asLink size="sm" radius="lg">
						Create a Trial
					</Button>
				</Grid.Col>
			</Grid>

			<Group position="apart">
				<Title order={2}>Events Nearby</Title>
				<Link href="/dashboard/my-events/near-me" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Group>
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
