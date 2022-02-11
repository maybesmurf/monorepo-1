import { TextInput } from "@Components/shared/TextInput"
import { useMantineTheme } from "@mantine/core"
import { useState } from "react"

const Sandbox = () => {
	const { colors } = useMantineTheme()
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
							label="Some Label"
							description="This is a description"
							placeholder="Placeholder text"
							required
							value={value}
							onChange={(val) => setValue(val.target.value)}
							// invalid={true}
							// invalidText="You did something wrong!"
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Sandbox
