import type { Dispatch, SetStateAction } from "react"
import { Image, Group, MediaQuery, Burger, Header, useMantineTheme, Center, SVG } from "@Components/shared"
import { imageDict } from "@Utils/imageDict"
import { NAVBAR_HEIGHT } from "./index"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const HeaderComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Header
			height={NAVBAR_HEIGHT}
			padding="lg"
			fixed
			styles={{
				root: {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: colors.yellow[0]
				}
			}}
		>
			<Image
				src={imageDict.logoWithText.src}
				alt={imageDict.logoWithText.alt}
				width="9rem"
				height="4rem"
				fit="contain"
			/>
			<Group spacing="lg" position="right" noWrap style={{ color: colors.teal[6] }}>
				{/* TODO: Give these SVG's their onClick! */}
				<SVG.HelpCircle width="24px" style={{ cursor: "pointer" }} />
				<SVG.Bell width="24px" style={{ cursor: "pointer" }} />
				<MediaQuery largerThan="sm" styles={{ display: "none" }}>
					<Center>
						<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={colors.teal[6]} />
					</Center>
				</MediaQuery>
			</Group>
		</Header>
	)
}

export default HeaderComp
