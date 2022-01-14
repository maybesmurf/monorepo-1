export const successHandler = (req: any, res: any, next: any) => {
	// Avoiding a "double-send"
	let oldSend = res.send
	res.send = (data: any) => {
		let newData = {
			ok: true,
			data: JSON.parse(data)
		}

		res.send = oldSend // Set function back to avoid a "double-send"
		return res.send(newData)
	}
	next()
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
