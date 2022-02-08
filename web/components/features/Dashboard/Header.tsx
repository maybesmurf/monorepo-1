import type { Dispatch, SetStateAction } from "react"
import { Image } from "@Components/shared"
import { MediaQuery, Burger, Header, useMantineTheme } from "@mantine/core"
import { imageDict } from "@Utils/imageDict"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const HeaderComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Header height={100} padding="lg">
			<Image src={imageDict.logoWithText.src} alt={imageDict.logoWithText.alt} width="9rem" height="3.75rem" />
			<MediaQuery largerThan="sm" styles={{ display: "none" }}>
				<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={colors.gray[6]} mr="xl" />
			</MediaQuery>
		</Header>
	)
}

export default HeaderComp
