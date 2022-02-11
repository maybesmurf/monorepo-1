import { OptionalInputLabel } from "@Components/shared/OptionalInputLabel"
import { TextInput } from "@Components/shared/TextInput"
import { useState } from "react"

const Sandbox = () => {
	const [value, setValue] = useState("")

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
						<TextInput
							size={size as any}
							label={<OptionalInputLabel>Some Label</OptionalInputLabel>}
							description="This is a description"
							placeholder="Placeholder text"
							value={value}
							onChange={(val) => setValue(val.target.value)}
							invalid={value.length === 0}
							invalidText="You did something wrong!"
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Sandbox
