import { MantineThemeOverride } from "@mantine/core"
import colorStyles from "@Styles/colors"

export const colors = colorStyles

export const other = {
	colors: {
		white: "#ffffff"
	},
	spacing: {
		xxl: "3rem",
		xxxl: "4.5rem",
		xxxxl: "5.5rem"
	}
}

export const theme: MantineThemeOverride = {
	colorScheme: "light",
	fontFamilyMonospace: "Monaco, Courier, monospace",
	fontFamily: "Open Sans",
	headings: { fontFamily: "Josefin Sans, serif" },
	colors: {
		gray: colorStyles.gray,
		teal: colorStyles.teal,
		yellow: colorStyles.yellow,
		navy: colorStyles.navy,
		red: colorStyles.red,
		green: colorStyles.green
	},
	primaryColor: "teal",
	other
}
