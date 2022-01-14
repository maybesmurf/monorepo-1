import express from "express"
import cors from "cors"
const app = express()
const PORT = 5000

import v1 from "./routes/v1"
import { errorHandler, successHandler } from "./utils/responseHandlers"

// Sentry
import Sentry, { initSentry } from "./services/sentry"
initSentry()

// Firebase
// import { initFirebase } from "./services/firebase"
// initFirebase()

// Sentry request handler must be first handler on app
app.use(Sentry.Handlers.requestHandler())
app.use(cors())
app.use(express.json())

app.use(successHandler)

// Routes
// import auth from "./routes/auth"
// app.use("/auth", auth)

app.use("/v1", v1)

// Just ping the server, that's it.
app.get("/", async (req: any, res: any) => {
	const messages = [
		"Go, dog, go.",
		"See Spot run.",
		"What kind of dog likes taking a bath every day? A shampoo-dle.",
		"What do you get when you cross a dog and a computer? A megabyte."
	]

	res.json({ message: messages[Math.floor(Math.random() * messages.length)] })
})

// Force an error
// Please only use this route for development and testing purposes.
app.get("/error", (req, res) => {
	throw new Error("This is a test error from the API!")
})

//Error handlers
// Must come after ALL other middlewares and routes!
// Sentry error handler must be first error handler
app.use(Sentry.Handlers.errorHandler())
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}.`))
