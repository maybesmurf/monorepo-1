import { Select as MantineSelect, SelectProps, Space, Text, useMantineTheme } from "@mantine/core"

interface Props extends SelectProps {
	invalid?: boolean
	invalidText?: string
}

export const Select = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<div>
			<MantineSelect {...props} />
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { width: "100%", marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
