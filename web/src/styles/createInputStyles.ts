import { colors, other } from "@Styles/theme"

export const createInputStyles = () => ({
	label: {
		color: colors.navy[9],
		fontWeight: 600
	},
	required: {
		color: colors.red[6]
	},
	description: {
		color: `${colors.navy[9]} !important`,
		margin: ".2rem 0 .6rem"
	},
	input: {
		"color": colors.navy[9],
		"backgroundColor": colors.yellow[1],
		"letterSpacing": ".06rem",
		"::placeholder": {
			color: `${colors.gray[3]} !important`
		},
		"&:focus": {
			backgroundColor: other.colors.white,
			borderWidth: 1
		},
		"&:disabled": {
			backgroundColor: colors.yellow[0],
			borderColor: colors.gray[1],
			borderWidth: 2
		},
		"&:invalid": {
			color: colors.red[6],
			borderColor: "currentColor"
		}
	}
})
