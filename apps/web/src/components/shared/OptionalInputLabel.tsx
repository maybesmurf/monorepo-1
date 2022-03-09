import React, { ReactNode } from "react"
import { Group } from "./"

interface Props {
	children: ReactNode
}

/** This component contains an optional tag on the right side of the label. */
export const OptionalInputLabel = ({ children }: Props) => {
	return (
		<Group position="apart">
			<span>{children}</span>
			<span style={{ fontStyle: "italic", fontWeight: "400" }}>Optional</span>
		</Group>
	)
}
