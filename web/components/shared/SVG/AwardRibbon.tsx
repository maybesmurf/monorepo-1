import { SVGProps } from "react"

export const AwardRibbon = (props: SVGProps<SVGSVGElement>) => (
	<svg width={26} height={26} {...props}>
		<rect width={26} height={26} rx={4} fill={props.fill || "transparent"} />
		<path
			d="M13 14.75a4.083 4.083 0 1 0 0-8.167 4.083 4.083 0 0 0 0 8.167Z"
			stroke={props.stroke || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="m10.79 14.102-.706 5.315L13 17.667l2.917 1.75-.706-5.32"
			stroke={props.stroke || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
