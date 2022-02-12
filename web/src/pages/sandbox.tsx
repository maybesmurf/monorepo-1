import { DateRangePicker } from "@Components/shared/DateRangePicker"
import { useState } from "react"

const Sandbox = () => {
	const [value, setValue] = useState<Date | undefined>(undefined)

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
			<DateRangePicker
				invalid={!value}
				invalidText="Some test invalid"
				placeholder="some placeholder"
				label="Label"
				description="This is a description"
			/>
		</div>
	)
}

export default Sandbox
