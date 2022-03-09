import type { Dispatch, SetStateAction } from "react"
import { Navbar, useMantineTheme } from "@Components/shared"
import { UserAvatar } from "./UserAvatar"
import { NavList } from "./List"
import { NAVBAR_HEIGHT } from "../index"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ opened, setOpened }: Props) => {
	const { colors, spacing } = useMantineTheme()

	return (
		<Navbar
			padding={0}
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ xs: 300, lg: 400 }}
			styles={{
				root: {
					display: "flex",
					flexDirection: "column",
					marginTop: NAVBAR_HEIGHT,
					minHeight: "initial",
					maxHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
					backgroundColor: colors.yellow[0]
				}
			}}
		>
			<Navbar.Section style={{ flex: 1, padding: spacing.lg }}>
				<NavList />
			</Navbar.Section>
			<Navbar.Section>
				<UserAvatar />
			</Navbar.Section>
		</Navbar>
	)
}

export default NavbarComp
