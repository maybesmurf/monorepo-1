import { useState } from "react"
import { Stepper, Button, Group } from "@mantine/core"

const Test = () => {
	const [active, setActive] = useState(1)
	const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

	return (
		<>
			<Stepper
				active={active}
				onStepClick={setActive}
				breakpoint="sm"
				progressIcon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-activity"
					>
						<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
					</svg>
				}
			>
				<Stepper.Step label="Fist step" description="Create an account">
					Step 1 content: Create an account
				</Stepper.Step>
				<Stepper.Step label="Second step" description="Verify email">
					Step 2 content: Verify email
				</Stepper.Step>
				<Stepper.Step label="Final step" description="Get full access">
					Step 3 content: Get full access
				</Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>

			<Group position="center" mt="xl">
				<Button variant="default" onClick={prevStep}>
					Back
				</Button>
				<Button onClick={nextStep}>Next step</Button>
			</Group>
		</>
	)
}

export default Test
