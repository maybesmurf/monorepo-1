import { Text, Space, useMantineTheme } from "@mantine/core"
import { DatePicker as MantineDatePicker, DatePickerProps } from "@mantine/dates"

interface Props extends Omit<DatePickerProps, "error"> {
	invalid?: boolean
	invalidText?: string
}

export const DatePicker = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	// The Mantine DatePicker element has both an invalid and error prop.
	// However, the invalid prop doesn't seem to work like the rest of the Mantine inputs.
	// Therefore, we're using the error prop to determine if the DatePicker is invalid.
	// Additionally, the styling infromation must be handled in the Styles API here.
	return (
		<div>
			<MantineDatePicker
				firstDayOfWeek="sunday"
				error={invalid}
				styles={{
					error: {
						backgroundColor: `${colors.red[6]}`,
						borderColor: `${colors.red[6]}`
					}
				}}
				{...props}
			/>
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { width: "100%", marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
