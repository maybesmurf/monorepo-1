import { useMantineTheme, List, SVG } from "@Components/shared"
import { Dispatch, SetStateAction } from "react"
import { ListItem } from "./ListItem"
// import { useRouter } from "next/router"

interface Props {
	setNavbarIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavList = ({ setNavbarIsOpen }: Props) => {
	// const router = useRouter()
	const { colors, spacing } = useMantineTheme()

	return (
		<List styles={{ root: { listStyle: "none", flex: 1 }, item: { paddingBottom: spacing.xs } }}>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					// isActive={router.pathname === "/dashboard"}
					icon={<SVG.DogHouse withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Dashboard"
					path="/dashboard"
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					// isActive={router.pathname.includes("/my-events")}
					icon={<SVG.Calendar withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Events"
					path="/dashboard/my-events"
					subItems={[
						{ title: "Upcoming", path: "/upcoming" },
						{ title: "Saved", path: "/saved" },
						{ title: "Past", path: "/past" }
					]}
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					// isActive={router.pathname.includes("/my-dogs")}
					icon={<SVG.Paw withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Dogs"
					path="/dashboard/my-dogs"
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					// isActive={router.pathname.includes("/trophy-case")}
					icon={<SVG.AwardRibbon withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Trophy Case"
					path="/dashboard/trophy-case"
				/>
			</List.Item>
		</List>
	)
}
