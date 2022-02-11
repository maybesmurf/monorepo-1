import { NumberInput as MantineNumberInput, NumberInputProps, Space, Text, useMantineTheme } from "@mantine/core"

interface Props extends NumberInputProps {
	invalidText?: string
}

export const NumberInput = ({ invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<>
			<MantineNumberInput value={props.value} {...props} />
			{invalidText && !props.invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && props.invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</>
	)
}
