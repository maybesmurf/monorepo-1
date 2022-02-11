import { Space, Text, useMantineTheme } from "@mantine/core"
import { TimeInput as MantineTimeInput, TimeInputProps } from "@mantine/dates"

interface Props extends TimeInputProps {
	invalidText?: string
}

export const TimeInput = ({ invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<>
			<MantineTimeInput value={props.value} {...props} />
			{invalidText && !props.invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && props.invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</>
	)
}
