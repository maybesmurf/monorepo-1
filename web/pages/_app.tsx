// import { Provider } from "react-redux"
// import { store } from "@Redux/store"
import { MantineProvider } from "@mantine/core"
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

const MyApp = ({ Component, pageProps }: any) => {
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
						gray: [
							"#F2F2F2",
							"#DBDBDB",
							"#C4C4C4",
							"#ADADAD",
							"#969696",
							"#808080",
							"#666666",
							"#4D4D4D",
							"#333333",
							"#000000"
						],
						teal: [
							"#ECFBF8",
							"#E1F1EF",
							"#D1E9E6",
							"#B6DAD6",
							"#8EC1BF",
							"#69A6A5",
							"#426E6F",
							"#285E61",
							"#234E52",
							"#1D4044"
						],
						yellow: [
							"#FFFDF2",
							"#FFFAE6",
							"#FDF6D9",
							"#F0DE99",
							"#EAD173",
							"#E1B920",
							"#CAA102",
							"#987901",
							"#655001",
							"#332800"
						],
						navy: [
							"#EDF5F8",
							"#D7E8ED",
							"#A9D3DF",
							"#81BBCC",
							"#62A1B5",
							"#418397",
							"#2E7084",
							"#1B596C",
							"#114352",
							"#0A323E"
						],
						red: [
							"#FBEAEA",
							"#F6D4D4",
							"#EDB9B9",
							"#E08D8D",
							"#D77676",
							"#C85050",
							"#A93E3E",
							"#7E1B1B",
							"#541212",
							"#2A0909"
						],
						green: [
							"#ECF8F2",
							"#DFF3E9",
							"#D1E8DC",
							"#9FCBB3",
							"#77B794",
							"#569371",
							"#3F7959",
							"#256A44",
							"#1B4B31",
							"#0D2618"
						]
					}
				}}
			>
				<Component {...pageProps} />
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
