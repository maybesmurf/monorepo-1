import { Space, Text, Textarea as MantineTextarea, TextareaProps, useMantineTheme } from "@mantine/core"

interface Props extends TextareaProps {
	invalidText?: string
}

export const Textarea = ({ invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<>
			<MantineTextarea value={props.value} {...props} />
			{invalidText && !props.invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && props.invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</>
	)
}
