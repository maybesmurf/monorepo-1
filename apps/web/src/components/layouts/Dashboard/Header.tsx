import type { Dispatch, SetStateAction } from "react"
import { Image, Group, MediaQuery, Burger, Header, useMantineTheme, Center, SVG } from "@Components/shared"
import { imageDict } from "@Utils/imageDict"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const HeaderComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Header
			height={100}
			padding="lg"
			styles={{
				root: {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: colors.yellow[0]
				}
			}}
		>
			<Image src={imageDict.logoWithText.src} alt={imageDict.logoWithText.alt} width="9rem" height="3.75rem" />
			<Group spacing="lg" position="right" noWrap style={{ color: colors.teal[6] }}>
				<SVG.HelpCircle width="24px" style={{ cursor: "pointer" }} />
				<SVG.Bell width="24px" style={{ cursor: "pointer" }} />
				<MediaQuery largerThan="sm" styles={{ display: "none" }}>
					<Center>
						<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={colors.teal[6]} mr="xl" />
					</Center>
				</MediaQuery>
			</Group>
		</Header>
	)
}

export default HeaderComp
