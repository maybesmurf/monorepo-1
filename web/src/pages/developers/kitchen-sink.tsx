import { useState } from "react"
import { Group, Container, Title, MantineSize } from "@mantine/core"
import { Button } from "@Components/shared/Button"
import SVG from "@Components/shared/SVG"
import { Textarea } from "@Components/shared/Textarea"
import { TextInput } from "@Components/shared/TextInput"

const Test = () => {
	const [inputText, setInputText] = useState("")
	const [buttonText, setButtonText] = useState("Button")

	return (
		<main>
			<Title order={1} align="center">
				Welcome to the Kitchen Sink!
			</Title>
			<Group position="center" direction="column">
				<Container fluid padding="xl">
					<Title order={2}>Buttons</Title>
					<Group position="center" direction="row">
						{["xs", "sm", "md", "lg", "xl"].map((size) => {
							return (
								<Group key={size} direction="column">
									{[
										{},
										{ leftIcon: <SVG.Checkmark /> },
										{ rightIcon: <SVG.Carat />, variant: "outline" },
										{ compact: true, leftIcon: <SVG.Checkmark /> },
										{ compact: true, rightIcon: <SVG.Carat />, variant: "subtle" },
										{ compact: true, leftIcon: <SVG.Checkmark />, disabled: true },
										{ compact: true, rightIcon: <SVG.Carat />, disabled: true }
									].map((props: any, index: number) => {
										return (
											<Button key={size + index} size={size as MantineSize} {...props}>
												{buttonText}
											</Button>
										)
									})}
								</Group>
							)
						})}
					</Group>
				</Container>

				<Container fluid>
					<Title order={2}>Inputs</Title>
					<Group>
						<Textarea
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							label="Textarea"
							description="This is a description"
							required
							invalid={inputText.length === 0 || inputText === "Button"}
							invalidText="You must enter a value"
						/>
						<Textarea
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							label="Textarea"
							description="This is a description"
						/>

						<TextInput
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							label="TextInput"
							description="This is a description"
						/>
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
