import type { Dispatch, SetStateAction } from "react"
import { Button, Navbar, useMantineTheme } from "@mantine/core"
import SVG from "@Components/shared/SVG"
import Link from "next/link"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Navbar
			padding="lg"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ xs: 300, lg: 400 }}
			styles={{ root: { backgroundColor: colors.yellow[0] } }}
		>
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
			<Link href="/dashboard/my-dogs" passHref>
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
		</Navbar>
	)
}

export default NavbarComp
