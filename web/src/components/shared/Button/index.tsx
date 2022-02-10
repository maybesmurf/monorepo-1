import { useMantineTheme, Button as MantineButton, ButtonProps } from "@mantine/core"

export const Button = ({ children, ...props }: ButtonProps<"button" | "a"> & { disabled?: boolean }) => {
	const { colors } = useMantineTheme()

	const DISABLED_STYLES = {
		color: `${colors.gray[5]} !important`,
		backgroundColor: `${colors.gray[0]} !important`
	}

	return (
		<MantineButton
			disabled={props.component === "button" ? props.disabled : false}
			radius={props.size === "xs" ? "md" : "lg"}
			styles={{
				root: {
					fontFamily: "Open Sans, sans-serif",
					letterSpacing: ".1rem"
				},
				filled: {
					"&:disabled": DISABLED_STYLES
				},
				outline: {
					"borderWidth": 1.5,
					"&:hover": {
						borderColor: colors.teal[6],
						backgroundColor: colors.teal[6],
						borderOpacity: "1 !important",
						color: colors.yellow[0]
					},
					"&:disabled": DISABLED_STYLES
				},
				subtle: {
					"color": colors.navy[9],
					"&:hover": {
						backgroundColor: colors.teal[1]
					},
					"&:disabled": {
						backgroundColor: "transparent !important"
					}
				}
			}}
			{...props}
		>
			{children}
		</MantineButton>
	)
}
