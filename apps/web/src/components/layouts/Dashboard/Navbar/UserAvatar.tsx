import { Avatar, Text, SVG, Group, useMantineTheme } from "@Components/shared"
import { useAuthSession } from "@Hooks/useAuthSession"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const DUMMY_USER = {
	firstName: "Amy",
	lastName: "Smith",
	email: "asmith@gmail.com"
}

export const UserAvatar = () => {
	const router = useRouter()
	const { authUser, authStatus } = useAuthSession()
	const { colors } = useMantineTheme()
	const initials = `${DUMMY_USER.firstName[0]}${DUMMY_USER.lastName[0]}`

	const [firstName, lastName] = authUser?.name ? authUser.name.split(" ") : ["", ""]

	useEffect(() => {
		if (authStatus === "unauthenticated") {
			router.push("/login")
		}
	}, [authStatus, router])

	return (
		<>
			<button onClick={() => signOut()}>Log out</button>
			<Group
				direction="row"
				position="apart"
				onClick={() => console.log("TODO")}
				style={{ cursor: "pointer", padding: "1rem" }}
			>
				<Avatar
					size="md"
					radius="xl"
					styles={{ placeholder: { backgroundColor: colors.teal[1], color: colors.navy[9] } }}
				>
					{initials}
				</Avatar>
				<Group
					direction="column"
					position="apart"
					style={{
						flex: 1,
						overflow: "hidden",
						// TODO: Make a <Mask /> component
						WebkitMaskImage: `linear-gradient(to right, black 80%, transparent 100%)`
					}}
				>
					<Text size="sm" weight="bold" color={colors.teal[6]}>
						{firstName} {lastName}
					</Text>
					<Text size="sm" color={colors.teal[8]}>
						{authUser?.email ? authUser.email : ""}
					</Text>
				</Group>
				<SVG.Carat width="18px" height="24px" stroke={colors.teal[6]} style={{ transform: "rotate(-90deg)" }} />
			</Group>
		</>
	)
}
