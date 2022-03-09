import { SVGProps } from "react"

export const Exit = ({ stroke, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 14 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M9.333 10.415 12.25 7.5 9.333 4.582M12.25 7.498h-7M5.25 12.748H2.917a1.167 1.167 0 0 1-1.167-1.167V3.415a1.167 1.167 0 0 1 1.167-1.167H5.25"
			stroke={stroke || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
