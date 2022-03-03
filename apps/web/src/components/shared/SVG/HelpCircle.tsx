import { SVGProps } from "react"

export const HelpCircle = ({ fill, stroke, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM9 12.75h.008"
			stroke={stroke || "currentColor"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.817 6.75a2.25 2.25 0 0 1 4.373.75c0 1.5-2.25 2.25-2.25 2.25"
			stroke={stroke || "currentColor"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
