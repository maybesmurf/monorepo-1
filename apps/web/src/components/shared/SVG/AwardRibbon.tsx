import { SVGProps } from "react"

export const AwardRibbon = ({ withRect, fill, stroke, ...props }: SVGProps<SVGSVGElement> & { withRect?: boolean }) => {
	if (withRect) {
		return (
			<svg width={props.width || "100%"} height={props.height || "100%"} viewBox="0 0 26 26" {...props}>
				<rect width={26} height={26} rx={4} fill={fill || "transparent"} />
				<path
					d="m10.79 14.102-.706 5.315L13 17.667l2.917 1.75-.706-5.32"
					stroke={stroke || "currentColor"}
					fill={fill || "transparent"}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M13 14.75a4.083 4.083 0 1 0 0-8.167 4.083 4.083 0 0 0 0 8.167Z"
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
					d="M7 8.75A4.083 4.083 0 1 0 7 .585 4.083 4.083 0 0 0 7 8.75Z"
					stroke="#426E6F"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="m4.789 8.102-.706 5.314L7 11.666l2.916 1.75-.705-5.32"
					stroke="#426E6F"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}
}
