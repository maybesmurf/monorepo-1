import { getLayout } from "@Components/layouts/Dashboard"
import { Title, Text, TextInput, useMantineTheme, SimpleGrid, NumberInput } from "@Components/shared"
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from "react-query"
import { getYear } from "date-fns"

type Inputs = {}

const Settings = () => {
	const { colors } = useMantineTheme()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()
	const { mutate } = useMutation(async () => {
		/* TODO */
	})

	const onSubmit: SubmitHandler<Inputs> = (data: any) => {
		console.log(data)
		// TODO: mutate()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SimpleGrid cols={1} style={{ gap: "2rem" }}>
				<Title order={1}>Account Settings</Title>
				<Title order={2}>Personal Information</Title>
				<TextInput label="Name" />
				<TextInput label="Email" type="email" />
				<TextInput label="Phone" type="tel" />
				<Title order={2}>Location</Title>
				<Text color={colors.gray[7]}>
					Let us know what location you're interested in and we will send you personalized recomendations about events
					near you.
				</Text>
				<NumberInput hideControls label="Zip Code" type="number" />
				<NumberInput label="Notify me about events within" type="number" />
				<Title order={2}>Password</Title>
				<TextInput label="Current Password" type="password" />
				<TextInput label="New Password" type="password" />
				<TextInput label="Repeat New Password" type="password" />
				<Title order={2}>Payment Information</Title>
				<Title order={3}>Credit Card</Title>
				<Text color={colors.gray[7]}>
					Save your card information to your account and save time during trial registration.
				</Text>
				<TextInput label="Cardholder Name" type="text" />
				<TextInput label="Card Number" type="number" />
				<NumberInput label="Expiration Month" type="number" min={1} max={12} />
				<NumberInput label="Expiration Year" type="number" min={1900} max={getYear(Date.now()) + 10} />
				<NumberInput label="CVC Number" type="number" min={0} max={999} />
			</SimpleGrid>
		</form>
	)
}

Settings.getLayout = getLayout

export default Settings
