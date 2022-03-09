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
			fixed={opened ? true : false}
			position={{ top: 0, bottom: 0, left: 0, right: 0 }}
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 300 }}
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
