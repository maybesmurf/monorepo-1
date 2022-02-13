import { useState } from "react"
import { Group, Container, Title, Button, MantineSize, ButtonProps } from "@mantine/core"
import SVG from "@Components/shared/SVG"

const Test = () => {
	const [text, setText] = useState("Hello world!")

	return (
		<main>
			<Title order={1} align="center">
				Welcome to the Kitchen Sink!
			</Title>
			<Group position="center" direction="column">
				<Container fluid>
					<Title order={2}>Buttons</Title>
					<Group position="center" direction="row">
						{["xs", "sm", "md", "lg", "xl"].map((size) => {
							return (
								<Group key={size} direction="column">
									{[{}, { leftIcon: <SVG.Checkmark /> }, { rightIcon: <SVG.Carat /> }].map(
										(props: ButtonProps<"button">) => {
											return (
												<Button key={Math.random()} size={size as MantineSize} {...props}>
													{text}
												</Button>
											)
										}
									)}
								</Group>
							)
						})}
					</Group>
				</Container>
			</Group>
			{/* <Stepper
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
			</Stepper> */}
		</main>
	)
}

export default Test
