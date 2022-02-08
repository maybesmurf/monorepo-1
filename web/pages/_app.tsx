// import { Provider } from "react-redux"
// import { store } from "@Redux/store"
import { Global, MantineProvider } from "@mantine/core"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import colors from "@Styles/colors"
import { NextPage } from "next"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0
		}
	}
})

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
				theme={{
					/** Put your mantine theme override here */
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
					spacing: {
						// xxl: "5rem"
						// TODO: Need sizes for 48 = 3rem, 88 = 5.5rem, and 72 = 4.5rem
					}
				}}
			>
				<Global
					styles={(theme) => ({
						body: {
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
