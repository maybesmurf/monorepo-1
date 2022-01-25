import type { SVGProps } from "react"
import { useMantineTheme } from "@mantine/core"

interface Props extends SVGProps<SVGSVGElement> {
	foregroundColor?: string
}

export const AlertCircle = ({ width, fill, foregroundColor, ...rest }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<svg width={width || "100%"} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<path
				d="M9.50016 17.4168C13.8724 17.4168 17.4168 13.8724 17.4168 9.50016C17.4168 5.12791 13.8724 1.5835 9.50016 1.5835C5.12791 1.5835 1.5835 5.12791 1.5835 9.50016C1.5835 13.8724 5.12791 17.4168 9.50016 17.4168Z"
				fill={fill || colors.gray[9]}
			/>
			<path
				d="M9.5 6.3335V9.50016"
				stroke={foregroundColor || colors.gray[0]}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 12.6665H9.50792"
				stroke={foregroundColor || colors.gray[0]}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
