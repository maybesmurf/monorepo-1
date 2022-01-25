import { Image } from "@Components/shared"
import SVG from "@Components/shared/SVG"
import { Box } from "@Components/shared/SVG/Box"
import {
	Alert,
	AppShell,
	Button,
	Card,
	Container,
	Grid,
	Group,
	Header,
	Navbar,
	Title,
	useMantineTheme
} from "@mantine/core"
import { imageDict } from "@Utils/imageDict"
import Link from "next/link"

const DUMMY_TRIALS = [
	{
		id: "asdf",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	},
	{
		id: "asd",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	},
	{
		id: "as",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	}
]

const Dashboard = () => {
	const { colors, spacing } = useMantineTheme()

	return (
		<AppShell
			padding="md"
			header={
				<Header height={100} padding="lg">
					<Image src={imageDict.logoWithText.src} alt={imageDict.logoWithText.alt} width="9rem" height="3.75rem" />
				</Header>
			}
			navbar={
				<Navbar width={{ base: 300 }} padding="lg">
					<Grid columns={1} gutter="xl">
						<Grid.Col>
							<Link href="/dashboard" passHref>
								<Button
									component="a"
									leftIcon={<Box width="25px" />}
									color="yellow"
									fullWidth
									variant="subtle"
									radius="xl"
									size="md"
									styles={{ root: { color: colors.gray[9] } }}
								>
									Dashboard
								</Button>
							</Link>
						</Grid.Col>
						<Grid.Col>
							<Link href="/dashboard/my-events" passHref>
								<Button
									component="a"
									leftIcon={<Box width="25px" />}
									color="yellow"
									fullWidth
									variant="subtle"
									radius="xl"
									size="md"
									styles={{ root: { color: colors.gray[9] } }}
								>
									My Events
								</Button>
							</Link>
						</Grid.Col>
						<Grid.Col>
							<Link href="/dashboard/dogs" passHref>
								<Button
									component="a"
									leftIcon={<Box width="25px" />}
									color="yellow"
									fullWidth
									variant="subtle"
									radius="xl"
									size="md"
									styles={{ root: { color: colors.gray[9] } }}
								>
									Dogs
								</Button>
							</Link>
						</Grid.Col>
					</Grid>
				</Navbar>
			}
		>
			<Alert
				icon={<SVG.AlertCircle width="24px" style={{ position: "relative", top: "-2px" }} />}
				title="You have unsaved changes!"
				color="red"
				radius="xl"
				withCloseButton
				onClose={() => console.log("ringdog pooped on the carpet")}
				styles={{ root: { padding: spacing.xl } }}
			>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia con.
			</Alert>

			<Container size="xl">
				<Title order={1} style={{ margin: "12px 0" }}>
					My Events
				</Title>
				<Group spacing="lg" position="center">
					{DUMMY_TRIALS.map((trial) => {
						return (
							<Card
								key={trial.id}
								padding="sm"
								shadow="lg"
								radius="xl"
								withBorder
								styles={{ root: { width: "300px" } }}
							>
								<Card.Section>
									<Image src={imageDict.dummyTrial.src} alt={imageDict.dummyTrial.alt} width="100%" height="200px" />
								</Card.Section>
								<div>
									<p>{trial.title}</p>
									<p>{trial.date}</p>
									<p>{trial.location}</p>
								</div>
							</Card>
						)
					})}
				</Group>
			</Container>
		</AppShell>
	)
}

export default Dashboard
