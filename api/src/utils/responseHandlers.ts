export class ResponseError extends Error {
	constructor(message: string, public readonly responseInfo: { statusCode: number; info?: any }) {
		super(message)
	}
}

// This handler does not need to include Sentry.
// Sentry's error handling has been accounted for in the app index.
export const errorHandler = (err: any, req: any, res: any, next: any) => {
	console.error(err)

	if (err instanceof ResponseError) {
		const { responseInfo, message } = err
		const { statusCode, info } = responseInfo
		return res.status(statusCode).json({
			error: message,
			errorInfo: info
		})
	}

	return res.status(500).json({ error: err.message })
}
