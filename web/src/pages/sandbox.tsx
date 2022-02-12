import { Stepper } from "@mantine/core"

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
			<Stepper active={1} styles={{ root: { width: "100%" } }}>
				<Stepper.Step label="First Step">Tester 1</Stepper.Step>
				<Stepper.Step label="Second Step">Tester 2</Stepper.Step>
				<Stepper.Step label="Third Step">Tester 3</Stepper.Step>
			</Stepper>
		</div>
	)
}

export default Sandbox
