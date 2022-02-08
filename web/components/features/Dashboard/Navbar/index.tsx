import type { Dispatch, SetStateAction } from "react"
import { Button, Navbar, useMantineTheme } from "@mantine/core"
import SVG from "@Components/shared/SVG"
import ShallowRoute from "@Components/shared/ShallowRoute"
import { useRouter } from "next/router"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ opened, setOpened }: Props) => {
	const router = useRouter()
	const { colors } = useMantineTheme()

	return (
		<Navbar
			padding="lg"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ xs: 300, lg: 400 }}
			styles={{ root: { backgroundColor: colors.yellow[0] } }}
		>
			<ShallowRoute path="/dashboard">
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
			</ShallowRoute>
			{/* <ShallowRoute path="/dashboard/my-events"> */}
			<a onClick={() => router.push("/dashboard/my-events", undefined, { shallow: true })}>
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
			</a>
			<ShallowRoute path="/dashboard/dogs">
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
			</ShallowRoute>
		</Navbar>
	)
}

export default NavbarComp
