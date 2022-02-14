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
					Alert: ({ colors }) => ({
						message: { letterSpacing: ".06rem" }
					}),
					Button: ({ colors }) => ({
						default: {
							color: colors.yellow[0]
						},
						root: {
							fontFamily: "Open Sans, sans-serif",
							letterSpacing: ".1rem"
						},
						leftIcon: {
							height: "33%"
						},
						rightIcon: {
							height: "33%"
						},
						filled: {
							"&:disabled": DISABLED_BUTTON_STYLES
						},
						outline: {
							"borderWidth": 2,
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
					Textarea: createInputStyles({
						input: {
							height: "10rem"
						}
					}),
					TextInput: createInputStyles(),
					NumberInput: createInputStyles(),
					TimeInput: createInputStyles(),
					Select: ({ colors, other }) => ({
						...createInputStyles({
							input: {
								"backgroundColor": colors.yellow[0],
								"color": colors.navy[9],
								// "borderColor": colors.gray[1],
								"::placeholder": {
									color: `${colors.gray[1]} !important`
								},
								"&:focus": {
									backgroundColor: other.colors.white
								},
								"&:disabled": {
									"::placeholder": {
										color: `${colors.gray[1]} !important`
									},
									"backgroundColor": colors.yellow[1],
									"borderColor": colors.gray[1]
								}
							},
							hovered: {
								color: colors.navy[9],
								backgroundColor: colors.teal[1]
							},
							selected: {
								color: colors.navy[9],
								backgroundColor: colors.yellow[1]
							}
						})
					}),
					DatePicker: ({ colors }) => ({
						...createInputStyles({
							input: {
								"backgroundColor": colors.yellow[1],
								"::placeholder": {
									color: `${colors.gray[1]} !important`
								},
								"&:disabled": {
									"::placeholder": {
										color: `${colors.gray[1]} !important`
									},
									"backgroundColor": colors.yellow[1],
									"borderColor": colors.gray[1]
								}
							},
							day: {
								"color": colors.navy[9],
								"&:hover": {
									backgroundColor: colors.yellow[1]
								}
							},
							weekend: {
								color: `${colors.navy[9]} !important`
							}
						})
					}),
					DateRangePicker: ({ colors }) => ({
						...createInputStyles({
							input: {
								"backgroundColor": colors.yellow[1],
								"::placeholder": {
									color: `${colors.gray[1]} !important`
								},
								"&:disabled": {
									"::placeholder": {
										color: `${colors.gray[1]} !important`
									},
									"backgroundColor": colors.yellow[1],
									"borderColor": colors.gray[1]
								}
							},
							inRange: {
								backgroundColor: `${colors.teal[1]} !important`
							},
							firstInRange: {
								backgroundColor: `${colors.teal[9]} !important`,
								borderRadius: ".2rem !important"
							},
							lastInRange: {
								backgroundColor: `${colors.teal[9]} !important`,
								borderRadius: ".2rem !important"
							},
							day: {
								"color": colors.navy[9],
								"&:hover": {
									backgroundColor: colors.yellow[1]
								}
							},
							weekend: {
								color: `${colors.navy[9]} !important`
							}
						})
					}),
					Checkbox: ({ colors }) => ({
						input: {
							"backgroundColor": colors.yellow[1],
							"borderColor": colors.gray[1],
							"&:disabled": {
								backgroundColor: colors.yellow[0],
								borderColor: colors.gray[1]
							}
						}
					}),
					Stepper: ({ colors }) => ({
						steps: {
							marginBottom: "3rem"
						},
						step: {
							flexDirection: "column",
							alignItems: "center"
						},
						stepIcon: {
							color: colors.navy[9],
							backgroundColor: colors.yellow[2]
						},
						stepBody: {
							position: "relative",
							margin: 0
						},
						stepLabel: {
							position: "absolute",
							top: ".5rem",
							left: "50%",
							transform: "translateX(-50%)",
							color: colors.navy[9],
							fontWeight: "600",
							textAlign: "center",
							lineHeight: "150%",
							letterSpacing: ".03rem"
						},
						separator: {
							backgroundColor: colors.yellow[2],
							height: "6px",
							margin: 0
						},
						stepProgress: {}
					}),
					Tooltip: ({ colors, other }) => ({
						body: {
							backgroundColor: other.colors.white,
							color: colors.gray[7],
							border: `${colors.gray[1]} solid 1px`
						}
					})
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
						},
						".quill-editor": {
							backgroundColor: theme.colors.yellow[1]
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
