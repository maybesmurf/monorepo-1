import { SVGProps } from "react"

export const DogHouse = ({ withRect, stroke, fill, ...props }: SVGProps<SVGSVGElement> & { withRect?: boolean }) => {
	if (withRect) {
		return (
			<svg width={props.width || "100%"} height={props.height || "100%"} viewBox="0 0 26 26" {...props}>
				<rect width={26} height={26} rx={4} fill={fill || "transparent"} />
				<path
					d="M7.75 11.25 13 7.167l5.25 4.083v6.417a1.167 1.167 0 0 1-1.167 1.166H8.917a1.167 1.167 0 0 1-1.167-1.166V11.25Z"
					stroke={stroke || "currentColor"}
					fill={fill || "transparent"}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.25 18.833V13h3.5v5.833"
					stroke={stroke || "currentColor"}
					fill={fill || "transparent"}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	} else {
		return (
			<svg
				width={props.width || "100%"}
				height={props.height || "100%"}
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M11.083 2.334H2.917c-.645 0-1.167.522-1.167 1.167v8.166c0 .645.522 1.167 1.167 1.167h8.166c.645 0 1.167-.522 1.167-1.167V3.501c0-.645-.522-1.167-1.167-1.167ZM9.333 1.166v2.333M4.667 1.166v2.333M1.75 5.834h10.5"
					stroke={stroke || "currentColor"}
					fill={fill || "transparent"}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}
}
