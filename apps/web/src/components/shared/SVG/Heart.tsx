import { SVGProps } from "react"

export const Heart = ({ fill, stroke, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 20 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17.367 2.136a4.584 4.584 0 0 0-6.484 0L10 3.02l-.883-.883A4.584 4.584 0 1 0 2.633 8.62l.884.884L10 15.986l6.483-6.483.884-.884a4.584 4.584 0 0 0 0-6.483v0Z"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
