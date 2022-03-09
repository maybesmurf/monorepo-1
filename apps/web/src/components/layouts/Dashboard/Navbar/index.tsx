import type { Dispatch, SetStateAction } from "react"
import { Navbar, useMantineTheme, Affix } from "@Components/shared"
import { UserAvatar } from "./UserAvatar"
import { NavList } from "./List"
import { NAVBAR_HEIGHT } from "../index"

interface Props {
	navbarIsOpen: boolean
	setNavbarIsOpen: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ navbarIsOpen, setNavbarIsOpen }: Props) => {
	const { colors, spacing } = useMantineTheme()

	return (
		<Navbar
			padding={0}
			fixed={navbarIsOpen ? true : false}
			position={{ top: 0, bottom: 0, left: 70, right: 0 }}
			hiddenBreakpoint="sm"
			hidden={!navbarIsOpen}
			width={{ sm: 300 }}
			styles={{
				root: {
					display: "flex",
					flexDirection: "column",
					marginTop: NAVBAR_HEIGHT,
					width: "initial",
					minHeight: "initial",
					maxHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
					backgroundColor: colors.yellow[0]
				}
			}}
		>
			{navbarIsOpen && (
				<Affix
					style={{ background: colors.teal[1], opacity: 0.75 }}
					position={{ top: 0, bottom: 0, right: 0, left: 0 }}
					zIndex={99}
				/>
			)}
			<Navbar.Section style={{ flex: 1, padding: spacing.lg }}>
				<NavList setNavbarIsOpen={setNavbarIsOpen} />
			</Navbar.Section>
			<Navbar.Section>
				<UserAvatar setNavbarIsOpen={setNavbarIsOpen} />
			</Navbar.Section>
		</Navbar>
	)
}

export default NavbarComp
