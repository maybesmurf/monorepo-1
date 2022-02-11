import { NumberInput } from "@Components/shared/NumberInput"
import { OptionalInputLabel } from "@Components/shared/OptionalInputLabel"
import { useState } from "react"

const Sandbox = () => {
	const [value, setValue] = useState(0)

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column"
			}}
		>
			{["xs", "sm", "md", "lg", "xl"].map((size) => {
				return (
					<div key={size} style={{ margin: "1rem 0" }}>
						<NumberInput
							size={size as any}
							label={<OptionalInputLabel>Some Label</OptionalInputLabel>}
							description="This is a description"
							placeholder="Placeholder text"
							value={value}
							onChange={(val) => setValue(val || 0)}
							invalid={value === 0}
							invalidText="You did something wrong!"
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Sandbox
