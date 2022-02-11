import { Button as MantineButton, ButtonProps } from "@mantine/core"

interface Props extends ButtonProps<"button" | "a"> {
	disabled?: boolean
}

export const Button = ({ children, ...props }: Props) => {
	return (
		<MantineButton
			disabled={props.component === "button" ? props.disabled : false}
			radius={props.size === "xs" ? "md" : "lg"}
			{...props}
		>
			{children}
		</MantineButton>
	)
}
