import React, { ReactNode } from "react"
import { Container, ContainerProps } from "@mantine/core"

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
}

export function Flexbox({
	direction = "row",
	justifyContent = "flex-start",
	alignItems = "flex-start",
	fluid = true,
	children,
	...props
}: Props) {
	return (
  <Container
  style={{
				display: "flex",
				flexDirection: direction,
				justifyContent,
				alignItems
			}}
  fluid={fluid}
  {...props}
		>
  {children}
		</Container>
	)
}
