const { SENTRY_DISABLED, SENTRY_DSN, ENVIRONMENT } = process.env

import Sentry from "@sentry/node"
// Needed for supporting tracing (even if it's not referenced)!
import Tracing from "@sentry/tracing"

export const initSentry = () => {
	if (!SENTRY_DISABLED) {
		Sentry.init({
			dsn: SENTRY_DSN,
			environment: ENVIRONMENT,
			tracesSampleRate: 1.0
		})
	}
}
