import { Radio, RadioGroup } from "@Components/shared/RadioGroup"
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
			<RadioGroup
				value={value}
				onChange={setValue}
				label="Select your favorite framework/library"
				description="This is anonymous"
				required
				invalid={!value}
				invalidText="Please select a framework/library"
				variant="vertical"
			>
				<Radio value="react">React</Radio>
				<Radio value="svelte">Svelte</Radio>
				<Radio value="ng">Angular</Radio>
				<Radio value="vue">Vue</Radio>
			</RadioGroup>
			{/* {["xs", "sm", "md", "lg", "xl"].map((size) => {
				return (
					<div key={size} style={{ margin: "1rem 0" }}>
						<TimeInput
							size={size as any}
							label="Some Label"
							description="This is a description"
							placeholder="Placeholder text"
							required
							value={value}
							onChange={(val) => setValue(val || 0)}
							invalid={true}
							invalidText="You did something wrong!"
						/>
					</div>
				)
			})} */}
		</div>
	)
}

export default Sandbox
