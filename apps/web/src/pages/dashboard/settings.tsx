import { getLayout } from "@Components/layouts/Dashboard"
import { Affix, Button, Title, Text, TextInput, useMantineTheme, SimpleGrid, NumberInput } from "@Components/shared"
import { useForm } from "@mantine/hooks"
import { useMutation } from "react-query"
import { getYear } from "date-fns"

const Settings = () => {
	const { colors } = useMantineTheme()
	const { getInputProps, values, errors, onSubmit, validateField } = useForm({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			zipCode: "",
			eventRadius: 0,
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
			cardholderName: "",
			cardNumber: "",
			expirationMonth: "",
			expirationYear: "",
			cvcNumber: ""
		},

		validationRules: {
			name: (value) => value.length > 0
		}
	})

	const { mutate, error: mutationError } = useMutation(async () => {
		/* TODO */
	})

	const handleSubmit = (data: any) => {
		// TODO: mutate()
	}

	return (
		<form onSubmit={() => onSubmit(handleSubmit)}>
			<SimpleGrid cols={1} style={{ gap: "2rem" }}>
				<Title order={1}>Account Settings</Title>
				<Title order={2}>Personal Information</Title>
				<TextInput
					id="settings-name-input"
					label="Name"
					type="text"
					value={values.name}
					onChange={getInputProps("name").onChange}
					onBlur={() => validateField("name")}
					invalidText={"Please enter a name between 1 and 10 characters."}
					invalid={!!errors.name}
				/>
				<TextInput id="settings-email-input" label="Email" type="email" {...getInputProps("email")} />
				<TextInput id="settings-phone-input" label="Phone" type="tel" {...getInputProps("phone")} />
				<Title order={2}>Location</Title>
				<Text color={colors.gray[7]}>
					Let us know what location you're interested in and we will send you personalized recomendations about events
					near you.
				</Text>
				<NumberInput
					id="settings-zip-input"
					hideControls
					label="Zip Code"
					type="number"
					{...getInputProps("zipCode")}
				/>
				<NumberInput
					id="settings-location-radius-input"
					label="Notify me about events within"
					type="number"
					{...getInputProps("eventRadius")}
				/>
				<Title order={2}>Password</Title>
				<TextInput
					id="settings-current-password"
					label="Current Password"
					type="password"
					{...getInputProps("currentPassword")}
				/>
				<TextInput id="settings-new-password" label="New Password" type="password" {...getInputProps("newPassword")} />
				<TextInput
					id="settings-confirm-password"
					label="Repeat New Password"
					type="password"
					{...getInputProps("confirmPassword")}
				/>
				<Title order={2}>Payment Information</Title>
				<Title order={3}>Credit Card</Title>
				<Text color={colors.gray[7]}>
					Save your card information to your account and save time during trial registration.
				</Text>
				<TextInput
					id="settings-cardholder-name"
					label="Cardholder Name"
					type="text"
					{...getInputProps("cardholderName")}
				/>
				<TextInput id="settings-card-number" label="Card Number" type="number" {...getInputProps("cardNumber")} />
				<NumberInput
					id="settings-card-exp-month"
					label="Expiration Month"
					type="number"
					min={1}
					max={12}
					{...getInputProps("expirationMonth")}
				/>
				<NumberInput
					id="settings-card-exp-year"
					label="Expiration Year"
					type="number"
					min={1900}
					max={getYear(Date.now()) + 10}
					{...getInputProps("expirationYear")}
				/>
				<NumberInput
					id="settings-card-cvc"
					label="CVC Number"
					type="number"
					min={0}
					max={999}
					{...getInputProps("cvcNumber")}
				/>
			</SimpleGrid>
			<Affix position={{ left: "50%", right: "50%", bottom: "12px" }}>
				<Button type="submit" color={colors.teal[6]}>
					Update Details
				</Button>
			</Affix>
		</form>
	)
}

Settings.getLayout = getLayout

export default Settings
