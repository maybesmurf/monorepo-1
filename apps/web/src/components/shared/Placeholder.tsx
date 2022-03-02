import { Container, SVG, useMantineTheme, Text } from "@Components/shared"

interface Props {
	message: string
}

export const Placeholder = ({ message }: Props) => {
	const { colors, radius, spacing } = useMantineTheme()
	return (
		<Container
			fluid
			style={{ width: "100%", padding: spacing.xs, borderRadius: radius.md, backgroundColor: colors.yellow[1] }}
		>
			<SVG.DogBowl height="200px" />
			<Text align="center" style={{ color: colors.yellow[9] }}>
				{message}
			</Text>
		</Container>
	)
}
