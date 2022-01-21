// import { Provider } from "react-redux"
// import { store } from "@Redux/store"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { MantineProvider } from "@mantine/core"
import Head from "next/head"

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
					colors: {
						gray: [
							"#000000",
							"#333333",
							"#4D4D4D",
							"#666666",
							"#808080",
							"#969696",
							"#ADADAD",
							"#C4C4C4",
							"#DBDBDB",
							"#F2F2F2"
						],
						teal: [
							"#1D4044",
							"#234E52",
							"#285E61",
							"#426E6F",
							"#69A6A5",
							"#8EC1BF",
							"#B6DAD6",
							"#D1E9E6",
							"#E1F1EF",
							"#ECFBF8"
						],
						yellow: [
							"#332800",
							"#655001",
							"#987901",
							"#CAA102",
							"#E1B920",
							"#EAD173",
							"#F0DE99",
							"#FDF6D9",
							"#FFFAE6",
							"#FFFDF2"
						],
						navy: [
							"#0A323E",
							"#114352",
							"#1B596C",
							"#2E7084",
							"#418397",
							"#62A1B5",
							"#81BBCC",
							"#A9D3DF",
							"#D7E8ED",
							"#EDF5F8"
						],
						red: [
							"#2A0909",
							"#541212",
							"#7E1B1B",
							"#A93E3E",
							"#C85050",
							"#D77676",
							"#E08D8D",
							"#EDB9B9",
							"#F6D4D4",
							"#FBEAEA"
						],
						green: [
							"#0D2618",
							"#1B4B31",
							"#256A44",
							"#3F7959",
							"#569371",
							"#77B794",
							"#9FCBB3",
							"#D1E8DC",
							"#DFF3E9",
							"#ECF8F2"
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
