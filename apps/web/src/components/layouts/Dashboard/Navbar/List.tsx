import { useMantineTheme, List, SVG } from "@Components/shared"
import { ListItem } from "./ListItem"
import { useRouter } from "next/router"

export const NavList = () => {
	const router = useRouter()
	const { colors, spacing } = useMantineTheme()
	console.log(router)
	return (
		<List styles={{ root: { listStyle: "none", flex: 1 }, item: { paddingBottom: spacing.xs } }}>
			<List.Item>
				<ListItem
					isActive={router.pathname === "/dashboard"}
					icon={<SVG.DogHouse withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Dashboard"
					path="/dashboard"
				/>
			</List.Item>
			<List.Item>
				<ListItem
					isActive={router.pathname.includes("/my-events")}
					icon={<SVG.Calendar withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Events"
					path="/dashboard/my-events"
				>
					My Events
				</ListItem>
			</List.Item>
			<List.Item>
				<ListItem
					isActive={router.pathname.includes("/my-dogs")}
					icon={<SVG.Paw withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Dogs"
					path="/dashboard/my-dogs"
				/>

				<ListItem
					isActive={router.pathname.includes("/trophy-case")}
					icon={<SVG.AwardRibbon withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Trophy Case"
					path="/dashboard/trophy-case"
				/>
			</List.Item>
		</List>
	)
}
