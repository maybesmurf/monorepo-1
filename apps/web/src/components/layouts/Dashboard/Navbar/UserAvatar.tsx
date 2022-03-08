import { Avatar, Text, SVG, Flexbox, useMantineTheme } from "@Components/shared"
import { signIn, signOut, useSession } from "next-auth/react"
import fetch from "@Utils/fetch"

const DUMMY_USER = {
	firstName: "Amy",
	lastName: "Smith",
	email: "asmith@gmail.com"
}

export const UserAvatar = () => {
	const { data: userData } = useSession()
	const { colors } = useMantineTheme()
	const initials = `${DUMMY_USER.firstName[0]}${DUMMY_USER.lastName[0]}`

	const [firstName, lastName] = userData?.user?.name ? userData.user.name.split(" ") : ["", ""]

	const doFetch = () => {
		fetch.get("/some-authy-boi").then((res) => console.log(res))
	}

	return (
		<>
			<button onClick={() => signIn()}>Sign in</button>
			<button onClick={() => signOut()}>Log out</button>
			<button onClick={doFetch}>da da ting</button>
			<Flexbox
				direction="row"
				alignItems="center"
				justifyContent="center"
				hoverbg={colors.yellow[1]}
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
				<Flexbox
					direction="column"
					alignItems="flex-start"
					justifyContent="flex-start"
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
						{userData?.user?.email ? userData.user.email : ""}
					</Text>
				</Flexbox>
				<SVG.Carat width="18px" height="24px" stroke={colors.teal[6]} style={{ transform: "rotate(-90deg)" }} />
			</Flexbox>
		</>
	)
}
