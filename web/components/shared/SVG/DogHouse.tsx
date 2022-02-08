import { SVGProps } from "react"

export const DogHouse = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 26 26" {...props}>
		<rect width={26} height={26} rx={4} fill={props.fill || "transparent"} />
		<path
			d="M7.75 11.25 13 7.167l5.25 4.083v6.417a1.167 1.167 0 0 1-1.167 1.166H8.917a1.167 1.167 0 0 1-1.167-1.166V11.25Z"
			stroke={props.stroke || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.25 18.833V13h3.5v5.833"
			stroke={props.stroke || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
