import { useMantineTheme, List as MantineList, SVG } from "@Components/shared"
import { ListItem } from "./ListItem"

export const List = () => {
	const { colors, spacing } = useMantineTheme()
	return (
		<MantineList styles={{ root: { listStyle: "none", flex: 1 }, item: { paddingBottom: spacing.xs } }}>
			<MantineList.Item>
				<ListItem
					icon={<SVG.DogHouse withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Dashboard"
					path="/dashboard"
				/>
			</MantineList.Item>
			<MantineList.Item>
				<ListItem
					icon={<SVG.Calendar withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Events"
					path="/dashboard/my-events"
				>
					My Events
				</ListItem>
			</MantineList.Item>
			<MantineList.Item>
				<ListItem
					icon={<SVG.Paw withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Dogs"
					path="/dashboard/my-dogs"
				/>
			</MantineList.Item>

			<MantineList.Item>
				<ListItem
					icon={<SVG.AwardRibbon withRect width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Trophy Case"
					path="/dashboard/trophy-case"
				/>
			</MantineList.Item>
		</MantineList>
	)
}
