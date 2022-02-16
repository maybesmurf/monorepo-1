import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core"

interface ButtonProps extends MantineButtonProps<"button"> {
	disabled?: boolean
}

export const Button = ({ children, ...props }: ButtonProps) => {
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
