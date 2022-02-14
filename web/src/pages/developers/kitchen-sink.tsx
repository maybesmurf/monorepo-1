import { useState } from "react"
import { Stepper, Group, Container, Title, MantineSize, Space } from "@mantine/core"
import {
	Button,
	DatePicker,
	DateRangePicker,
	Select,
	NumberInput,
	RadioGroup,
	Radio,
	SVG,
	Textarea,
	TextInput,
	TimeInput
} from "@Components/shared"

const SELECT_DATA = [
	{ value: "rick", label: "Rick", group: "Used to be a pickle" },
	{ value: "morty", label: "Morty", group: "Never was a pickle" },
	{ value: "beth", label: "Beth", group: "Never was a pickle" },
	{ value: "summer", label: "Summer", group: "Never was a pickle" }
]

const Test = () => {
	const [inputText, setInputText] = useState("")
	const [activeStep, setActiveStep] = useState(1)

	const buttonText = "Button"

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
						<NumberInput label="NumberInput" description="This is a description" />

						<TimeInput label="TimeInput" description="This is a description" />

						<RadioGroup label="RadioGroup" description="This is a description">
							<Radio value="react">React</Radio>
							<Radio value="svelte">Svelte</Radio>
							<Radio value="ng">Angular</Radio>
							<Radio value="vue">Vue</Radio>
						</RadioGroup>

						<Select data={SELECT_DATA} />

						<DatePicker label="DatePicker" description="This is a description" />

						<DateRangePicker label="DateRangePicker" description="This is a description" />
					</Group>
				</Container>
			</Group>
			<Stepper
				styles={{
					root: {
						margin: "0 3rem"
					}
				}}
				active={activeStep}
				onStepClick={setActiveStep}
				breakpoint="sm"
			>
				<Stepper.Step label="Fist step" description="description">
					Step 1 content: Create an account
				</Stepper.Step>
				<Stepper.Step label="Second step" description="description">
					Step 2 content: Verify email
				</Stepper.Step>
				<Stepper.Step label="Final step" description="description">
					Step 3 content: Get full access
				</Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>
			<Space style={{ height: "50rem" }} />
		</main>
	)
}

export default Test
