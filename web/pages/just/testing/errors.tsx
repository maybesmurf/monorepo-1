import type { NextPage } from "next"
import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"

const Error: NextPage = () => {
	return (
		<div>
			<h1>Error</h1>
			<p>This is the error page</p>
			<button
				type="button"
				onClick={() => {
					Sentry.captureException("helloooooooo, test error!")
				}}
			>
				Throw error
			</button>
		</div>
	)
}

export default Error
