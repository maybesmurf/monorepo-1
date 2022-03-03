import type { SVGProps } from "react"

export const Bell = ({ stroke, fill, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={props.width || "100%"}
			height={props.height || "100%"}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.5 6a4.5 4.5 0 1 0-9 0c0 5.25-2.25 6.75-2.25 6.75h13.5S13.5 11.25 13.5 6ZM10.297 15.75a1.499 1.499 0 0 1-2.595 0"
				stroke={stroke || "currentColor"}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
