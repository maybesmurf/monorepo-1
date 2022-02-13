import { SVGProps } from "react"

// If I set both width and height, use them.
// If I set only width, use height auto.
// If I set only height, use height auto.
// If I don't set anything, use width: 100%, height: auto.

export const Checkmark = ({ stroke, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "auto"}
		viewBox="0 0 10 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M9 1 3.5 6.5 1 4"
			stroke={stroke || "currentColor"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
