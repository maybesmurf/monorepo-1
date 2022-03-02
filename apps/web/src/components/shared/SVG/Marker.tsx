import { SVGProps } from "react"

export const Marker = ({ fill, stroke, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 12 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#a)" stroke={stroke || "currentColor"} strokeLinecap="round" strokeLinejoin="round">
			<path d="M10.5 5.795c0 3.5-4.5 6.5-4.5 6.5s-4.5-3-4.5-6.5a4.5 4.5 0 0 1 9 0Z" />
			<path d="M6 7.295a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill={fill || "currentColor"} transform="translate(0 .795)" d="M0 0h12v12H0z" />
			</clipPath>
		</defs>
	</svg>
)
