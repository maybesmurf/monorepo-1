import { Button } from "@Components/shared/Button"

const Sandbox = () => {
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
						<Button size={size} compact>
							Button
						</Button>
					</div>
				)
			})}
		</div>
	)
}

export default Sandbox
