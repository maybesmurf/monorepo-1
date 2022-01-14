import express from "express"
import cors from "cors"
const app = express()
const PORT = 5000

import v1 from "./routes/v1"

// Sentry
// import { initSentry } from "./services/sentry/index"
// initSentry()

// Firebase
// import { initFirebase } from "./services/firebase"
// initFirebase()

app.use(cors())
app.use(express.json())

//Error handler
// TODO: NOT CURRENTLY WORKING
app.use((err: any, req: any, res: any, next: any) => {
	return res.status(500).json({
		ok: false,
		error: err.toString()
	})
})

// Routes
// import auth from "./routes/auth"
// app.use("/auth", auth)

// Just ping the server, that's it.
app.get("/", async (req: any, res: any) => {
	res.json({ message: "The server...she lives!" })
})

app.get("/error", (req, res) => {
	throw new Error("Oh no, a bad thing happened!")
})

app.use("/v1", v1)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}.`))

// app.get("/error", async (req: any, res: any) => {
// This creates a start time for the op for Sentry to mark as the start of the request.
// 	const transaction = Sentry.startTransaction({
// 		op: "test",
// 		name: "My First Test Transaction"
// 	})

// 	setTimeout(() => {
// 		try {
// 			foo() // Is undefined so we get a throw
// 		} catch (e) {
// 			Sentry.captureException(e)
// 		} finally {
// This finishes the request from above, creating an interval of time in which this op occurred.
// 			transaction.finish()
// 			res.status(500).send({ message: "We messed up :(" })
// 		}
// 	}, 99)
// })
