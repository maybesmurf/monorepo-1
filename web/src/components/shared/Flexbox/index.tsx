import { ReactNode } from "react"
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

interface Props {
	direction: "row" | "column"
	justifyContent: FlexProperties
	alignItems: FlexProperties
	containerProps: ContainerProps
	children: ReactNode
}

const Flexbox = ({
	direction = "row",
	justifyContent = "flex-start",
	alignItems = "flex-start",
	containerProps,
	children
}: Props) => {
	return (
		<Container
			{...containerProps}
			style={{
				display: "flex",
				flexDirection: direction,
				justifyContent,
				alignItems
			}}
		>
			{children}
		</Container>
	)
}

export default Flexbox
