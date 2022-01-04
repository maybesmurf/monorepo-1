import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
const app = express()
const PORT = 5000

// Prisma
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// Sentry
// import { initSentry } from "./services/sentry/index"
// initSentry()

// Firebase
// import { initFirebase } from "./services/firebase"
// initFirebase()

app.use(cors())

// Routes
// import auth from "./routes/auth"
// app.use("/auth", auth)

// Ping the app
app.get("/", async (req: any, response: any) => {
	response.json({ message: "What up!" })
})

// Write a new row
app.post("/create", async (req: any, response: any) => {
	console.log({ "req.body": req.body })
	if (!req.body || !req.body.name) return response.json({ message: "Need to provide a name." })

	const resp = await prisma.test.create({
		data: {
			name: req.body.name
		}
	})

	return response.json({ [Date.now()]: resp })
})

// Get all rows
app.get("/all", async (req: any, response: any) => {
	const all = await prisma.test.findMany()

	return response.json({ [Date.now()]: all })
})

app.listen(PORT, () => console.log(`Server Running on port ${PORT}.`))

// app.get("/error", async (req: any, response: any) => {
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
// 			response.status(500).send({ message: "We messed up :(" })
// 		}
// 	}, 99)
// })
