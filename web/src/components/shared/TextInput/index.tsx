import { Space, Text, TextInput as MantineTextInput, TextInputProps, useMantineTheme } from "@mantine/core"

interface Props extends TextInputProps {
	invalidText?: string
}

export const TextInput = ({ invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<>
			<MantineTextInput value={props.value} {...props} />
			{invalidText && !props.invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && props.invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</>
	)
}
