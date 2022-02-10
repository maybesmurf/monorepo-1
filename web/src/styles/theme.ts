import { MantineThemeOverride } from "@mantine/core"
import colors from "@Styles/colors"

export const theme: MantineThemeOverride = {
	colorScheme: "light",
	fontFamilyMonospace: "Monaco, Courier, monospace",
	fontFamily: "Josefin Sans",
	headings: { fontFamily: "Lato, serif" },
	colors: {
		gray: colors.gray,
		teal: colors.teal,
		yellow: colors.yellow,
		navy: colors.navy,
		red: colors.red,
		green: colors.green
	},
	primaryColor: "teal",
	spacing: {
		// xxl: "5rem"
		// TODO: Need sizes for 48 = 3rem, 88 = 5.5rem, and 72 = 4.5rem
	}
}
