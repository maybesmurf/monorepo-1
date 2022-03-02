import { SVGProps } from "react"

export const Paw = ({ fill, stroke, ...props }: SVGProps<SVGSVGElement>) => (
	<svg width={props.width || "100%"} height={props.height || "100%"} viewBox="0 0 26 26" {...props}>
		<rect width={26} height={26} rx={4} fill={fill || "transparent"} />
		<path
			d="M17.444 13.179c.07.042.187.072.355.063.164-.008.343-.051.5-.116a.732.732 0 0 0 .279-.184c.067-.074.12-.161.21-.313.192-.325.224-.63.255-.95a1.362 1.362 0 0 0-.232-.942c-.156-.222-.28-.376-.43-.483-.136-.098-.317-.172-.611-.175-.196-.002-.378.108-.555.31a2.696 2.696 0 0 0-.321.482l-.047.084c-.058.1-.177.319-.25.59-.072.27-.089.56.014.823.12.309.26.46.377.55.064.05.13.088.204.127l.058.03c.06.03.135.069.194.104ZM15.302 9.755c.06 0 .162-.028.295-.122.13-.092.255-.223.354-.365.166-.236.17-.387.174-.724.004-.403-.118-.701-.243-1.002-.108-.257-.29-.55-.633-.722-.233-.117-.401-.186-.564-.202-.144-.015-.316.01-.555.158-.156.097-.26.294-.311.58-.042.232-.04.45-.037.611v.098c0 .121.006.384.076.67.07.288.196.559.404.74.243.211.422.268.55.286.07.01.139.01.217.006l.058-.003c.063-.004.148-.01.215-.009ZM10.89 9.882c-.05.007-.146-.006-.283-.082a1.49 1.49 0 0 1-.377-.312c-.184-.21-.207-.357-.25-.686-.052-.392.029-.697.113-1.004.072-.264.21-.568.512-.772.209-.141.357-.226.505-.26.13-.029.291-.027.532.089.156.074.278.251.361.526.068.221.09.433.108.59l.01.096c.015.118.04.376.008.662-.033.291-.121.567-.296.766-.204.232-.365.306-.48.337a1.026 1.026 0 0 1-.254.033c-.061.004-.145.008-.21.017Z"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeWidth={0.85}
		/>
		<path
			d="m10.616 14.17.337.258-.337-.258Zm-1.96 2.953-.41.109.41-.109Zm1.637 1.678.162-.393-.162.393Zm2.689-.682v-.425.425Zm2.851.682.185.382-.185-.382Zm1.563-2.181-.423-.042.423.042Zm-2.355-2.663-.312.289.312-.289Zm-2.193-2.239-.015-.425.015.425Zm-2.57 2.194c-.176.23-.396.442-.64.661-.235.21-.51.442-.739.675-.233.238-.457.514-.591.844-.14.342-.174.72-.063 1.14l.822-.218a.904.904 0 0 1 .028-.601c.074-.183.211-.366.411-.57.204-.207.435-.401.698-.637.253-.227.523-.482.75-.778l-.676-.516Zm-2.033 3.32c.141.532.384.938.722 1.258.331.314.734.527 1.165.704l.323-.786c-.388-.16-.681-.325-.903-.535-.215-.204-.381-.468-.485-.859l-.822.218Zm1.887 1.962c.7.288 1.256.03 1.683-.203.453-.247.758-.446 1.167-.447v-.85c-.678.001-1.209.352-1.573.55-.391.213-.636.295-.954.164l-.323.786Zm2.85-.65c.418 0 .763.217 1.266.476.46.236 1.07.502 1.77.163l-.37-.765c-.303.147-.571.072-1.012-.155-.397-.204-.976-.57-1.655-.569l.001.85Zm3.036.64c.497-.24.921-.556 1.236-.98.316-.425.505-.937.565-1.542l-.846-.084c-.047.473-.189.833-.401 1.12-.214.288-.518.524-.924.72l.37.765Zm1.8-2.522a1.769 1.769 0 0 0-.243-1.122c-.185-.306-.449-.543-.713-.743-.256-.193-.564-.387-.815-.56a4.084 4.084 0 0 1-.694-.569l-.623.578c.256.277.555.5.836.693.296.203.546.357.784.536.23.174.394.334.498.505a.92.92 0 0 1 .125.598l.846.084Zm-2.465-2.994a3.753 3.753 0 0 1-.49-.69c-.129-.225-.282-.522-.423-.747-.151-.241-.34-.49-.605-.67-.277-.187-.606-.281-1.002-.268l.03.85c.234-.008.382.045.495.122.122.083.235.215.362.417.136.219.239.428.408.721.156.271.345.566.601.843l.624-.578Zm-2.52-2.375a1.804 1.804 0 0 0-1.013.326c-.27.193-.466.448-.625.706-.154.25-.298.545-.435.805a5.464 5.464 0 0 1-.482.782l.675.516c.232-.304.408-.617.558-.901.156-.296.273-.537.408-.756.13-.212.255-.36.394-.46.131-.094.3-.16.55-.168l-.03-.85Z"
			stroke={stroke || "currentColor"}
			fill={stroke}
			strokeWidth={0.1}
		/>
		<path
			d="M8.559 13.206a.66.66 0 0 1-.363.066 1.564 1.564 0 0 1-.505-.115.736.736 0 0 1-.281-.184 1.846 1.846 0 0 1-.212-.315c-.193-.325-.225-.632-.255-.954a1.375 1.375 0 0 1 .236-.952c.157-.223.284-.38.436-.489.139-.1.323-.175.621-.18.2-.002.384.108.562.311.147.168.246.347.323.483l.047.085c.058.1.178.32.25.591.073.273.09.564-.014.83-.122.313-.264.466-.384.559-.065.05-.132.09-.207.129l-.06.03c-.06.03-.135.07-.194.105Z"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeWidth={0.85}
		/>
	</svg>
)