import type { NextPage } from "next"
import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"

const Error: NextPage = () => {
	useEffect(() => {
		Sentry.captureException("Front end error, please.")
		throw `Hi Sentry! This is a front-end error in environment: ${process.env.NEXT_PUBLIC_ENVIRONMENT}!`
	}, [])

	return (
		<div>
			<h1>Error</h1>
			<p>This is the error page</p>
		</div>
	)
}

export default Error
