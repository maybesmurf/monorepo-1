import type { Dispatch, SetStateAction } from "react"
import { Navbar, useMantineTheme } from "@Components/shared"
import { UserAvatar } from "./UserAvatar"
import { List } from "./List"

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
			styles={{
				root: { display: "flex", flexDirection: "column", marginTop: "100px", backgroundColor: colors.yellow[0] }
			}}
		>
			<Navbar.Section>
				<List />
			</Navbar.Section>
			<Navbar.Section>
				<UserAvatar />
			</Navbar.Section>
		</Navbar>
	)
}

export default NavbarComp
