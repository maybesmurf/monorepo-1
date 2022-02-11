// import { Provider } from "react-redux"
// import { store } from "@Redux/store"
import { Global, MantineProvider } from "@mantine/core"
import { createInputStyles } from "@Styles/createInputStyles"
import { colors, theme } from "@Styles/theme"
import { NextPage } from "next"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0
		}
	}
})

const DISABLED_BUTTON_STYLES = {
	color: `${colors.gray[5]} !important`,
	backgroundColor: `${colors.gray[0]} !important`
}

const MyApp = ({ Component, pageProps }: any) => {
	const getLayout = Component.getLayout || ((page: NextPage) => page)

	return (
		<>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={theme}
				styles={{
					Button: ({ colors }) => ({
						root: {
							fontFamily: "Open Sans, sans-serif",
							letterSpacing: ".1rem"
						},
						filled: {
							"&:disabled": DISABLED_BUTTON_STYLES
						},
						outline: {
							"borderWidth": 1.5,
							"&:hover": {
								borderColor: colors.teal[6],
								backgroundColor: colors.teal[6],
								borderOpacity: "1 !important",
								color: colors.yellow[0]
							},
							"&:disabled": DISABLED_BUTTON_STYLES
						},
						subtle: {
							"color": colors.navy[9],
							"&:hover": {
								backgroundColor: colors.teal[1]
							},
							"&:disabled": {
								backgroundColor: "transparent !important"
							}
						}
					}),
					Textarea: createInputStyles()
				}}
			>
				<Global
					styles={(theme) => ({
						"*": {
							boxSizing: "border-box",
							letterSpacing: ".03rem"
						},
						"body": {
							backgroundColor: theme.colors.yellow[0]
						}
					})}
				/>
				{getLayout(<Component {...pageProps} />)}
				<ReactQueryDevtools />
			</MantineProvider>
		</>
	)
}

const AppWrap = ({ Component, pageProps }: any) => {
	return (
		<QueryClientProvider client={queryClient}>
			{/* <Provider store={store}> */}
			<MyApp Component={Component} pageProps={pageProps} />
			{/* </Provider> */}
		</QueryClientProvider>
	)
}

export default AppWrap
