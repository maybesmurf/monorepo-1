// import { Provider } from "react-redux"
// import { store, useDispatch } from "@Redux/store"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import GlobalStyles from "../styles/globals"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0
		}
	}
})

const AppWrap = ({ Component, pageProps }: any) => {
	return (
		<QueryClientProvider client={queryClient}>
			{/* <Provider store={store}> */}
			<MyApp Component={Component} pageProps={pageProps} />
			{/* </Provider> */}
		</QueryClientProvider>
	)
}

const MyApp = ({ Component, pageProps }: any) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
			<ReactQueryDevtools />
		</>
	)
}

export default AppWrap
