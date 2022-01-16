export const formatSuccess = (data: any) => {
	return {
		ok: true,
		data
	}
}

// This handler does not need to include Sentry.
// Sentry's error handling has been accounted for in the app index.
export const errorHandler = (err: any, req: any, res: any, next: any) => {
	console.error(err)

	return res.status(500).json({
		ok: false,
		error: err.toString()
	})
}
