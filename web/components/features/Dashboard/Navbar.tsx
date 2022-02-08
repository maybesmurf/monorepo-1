import type { Dispatch, SetStateAction } from "react"
import { Button, Navbar, Grid, useMantineTheme } from "@mantine/core"
import SVG from "@Components/shared/SVG"
import Link from "next/link"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Navbar padding="lg" hiddenBreakpoint="sm" hidden={!opened} width={{ xs: 300, lg: 400 }}>
			<Grid columns={1} gutter="xl">
				<Grid.Col>
					<Link href="/dashboard" passHref>
						<Button
							component="a"
							leftIcon={<SVG.Box width="25px" />}
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
							leftIcon={<SVG.Box width="25px" />}
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
							leftIcon={<SVG.Box width="25px" />}
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
	)
}

export default NavbarComp
