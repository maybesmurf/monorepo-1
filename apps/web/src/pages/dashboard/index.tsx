import Link from "next/link"
import { EventCard } from "@Components/molecules"
import { Flexbox, SimpleGrid, Title, Text, Group } from "@Components/shared"
import { getLayout } from "@Components/layouts/Dashboard"
import { Placeholder } from "@Components/shared/Placeholder"

const UPCOMING_EVENTS = [
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle: "s",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewher",
		onClick: () => {}
	},
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle: "somethingggggggggggggggggggggggggggggggggggggggggggggggggggg",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewher",
		onClick: () => {}
	},
	{
		dateRange: { start: new Date(), end: new Date() },
		eventTitle:
			"somethinsomethigng somethin seomthin somethin somethion msoehtinmso ejitohnsiojf ideasoj fiaoes jieas jfilasejf il;asejfas",
		imageAlt: "testalt",
		imageUrl: "/jump-pup.png",
		status: "registered" as "registered",
		userRole: "host" as "host",
		favorite: true,
		location: "somewher",
		onClick: () => {}
	}
]

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
			<Group position="left" spacing="lg">
				{UPCOMING_EVENTS.map((event) => {
					return <EventCard key={event.location} {...event} />
				})}
			</Group>
			<Flexbox style={{ padding: 0 }} fluid direction="row" alignItems="center" justifyContent="space-between">
				<Title order={2}>Events Nearby</Title>
				<Link href="/dashboard/my-events/near-me" passHref>
					<Text style={{ fontWeight: "600", cursor: "pointer" }}>See All</Text>
				</Link>
			</Flexbox>
			<Group position="left" spacing="lg">
				{UPCOMING_EVENTS.map((event) => {
					return <EventCard key={event.location} {...event} />
				})}
			</Group>
		</SimpleGrid>
	)
}

DashboardPage.getLayout = getLayout

export default DashboardPage
