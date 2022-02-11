import { Select as MantineSelect, SelectProps, Space, Text, useMantineTheme } from "@mantine/core"

interface Props extends SelectProps {
	invalidText?: string
}

export const Select = ({ invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<>
			<MantineSelect {...props} />
			{invalidText && !props.invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && props.invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</>
	)
}
