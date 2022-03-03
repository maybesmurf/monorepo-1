import { Container } from "@mantine/core"
import { MantineColor, ContainerProps } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { CSSProperties, MouseEvent } from "react"
import { ReactNode } from "react"

type FlexProperties =
	| "flex-start"
	| "flex-end"
	| "center"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "initial"
	| "inherit"

interface Props extends ContainerProps {
	direction: "row" | "column"
	justifyContent: FlexProperties
	alignItems: FlexProperties
	children: ReactNode
	onClick?: (event: MouseEvent<HTMLDivElement>) => void
	hoverBackground?: MantineColor
	style?: CSSProperties
}

export const Flexbox = ({
	direction = "row",
	justifyContent = "flex-start",
	alignItems = "flex-start",
	fluid = true,
	onClick,
	style,
	children,
	...props
}: Props) => {
	const { hovered, ref } = useHover()

	return (
		<Container
			ref={ref}
			onClick={(e) => onClick && onClick(e)}
			style={{
				display: "flex",
				flexDirection: direction,
				justifyContent,
				alignItems,
				width: fluid ? "100%" : "initial",
				backgroundColor: hovered ? props.hoverBackground : "transparent",
				...style
			}}
			fluid={fluid}
			{...props}
		>
			{children}
		</Container>
	)
}
