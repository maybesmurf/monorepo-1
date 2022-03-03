import { Avatar, Text, SVG, Flexbox, useMantineTheme } from "@Components/shared"

const DUMMY_USER = {
	firstName: "Amy",
	lastName: "Smith",
	email: "asmith@gmail.com"
}

export const UserAvatar = () => {
	const { colors } = useMantineTheme()
	const initials = `${DUMMY_USER.firstName[0]}${DUMMY_USER.lastName[0]}`

	return (
		<Flexbox
			direction="row"
			alignItems="center"
			justifyContent="center"
			hoverBackground={colors.yellow[1]}
			onClick={() => console.log("TODO")}
			style={{ cursor: "pointer" }}
		>
			<Avatar
				size="md"
				radius="xl"
				styles={{ placeholder: { backgroundColor: colors.teal[1], color: colors.navy[9] } }}
			>
				{initials}
			</Avatar>
			<Flexbox direction="column" alignItems="flex-start" justifyContent="flex-start">
				<Text size="sm" weight="bold" color={colors.teal[6]}>
					{DUMMY_USER.firstName} {DUMMY_USER.lastName}
				</Text>
				<Text size="sm" color={colors.teal[8]}>
					{DUMMY_USER.email}
				</Text>
			</Flexbox>
			<SVG.Carat width="18px" height="24px" stroke={colors.teal[6]} style={{ transform: "rotate(-90deg)" }} />
		</Flexbox>
	)
}
