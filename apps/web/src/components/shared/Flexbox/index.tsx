import { Container, ContainerProps } from "@mantine/core"
import { CSSProperties } from "react"
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
	style?: CSSProperties
}

export const Flexbox = ({
	direction = "row",
	justifyContent = "flex-start",
	alignItems = "flex-start",
	fluid = true,
	style,
	children,
	...props
}: Props) => {
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: direction,
				justifyContent,
				alignItems,
				width: fluid ? "100%" : "initial",
				...style
			}}
			fluid={fluid}
			{...props}
		>
			{children}
		</Container>
	)
}
