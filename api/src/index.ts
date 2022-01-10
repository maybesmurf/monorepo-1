import express from "express"
import cors from "cors"
const app = express()
const router = express.Router()
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
app.use(express.json())

// Routes
// import auth from "./routes/auth"
// app.use("/auth", auth)

// Just ping the server, that's it.
app.get("/", async (req: any, response: any) => {
	response.json({ message: "The server...she lives!!!" })
})

// Ping the app
router.get("/", async (req: any, response: any) => {
	response.json({ message: "Yes, what up!" })
})

router.get("/some/nested/route", async (req: any, response: any) => {
	response.json({ message: "You've peeled back the onion, lad!" })
})

// Write a new row
router.post("/create", async (req: any, response: any) => {
	if (!req.body || !req.body.name) return response.status(400).json({ message: "Need to provide a name." })

	const resp = await prisma.test.create({
		data: {
			// email: req.body.email,
			name: req.body.name
		}
	})

	return response.json({ [Date.now()]: resp })
})

// Get all rows
router.get("/all", async (req: any, response: any) => {
	const all = await prisma.test.findMany()

	return response.json({ [Date.now()]: all })
})

app.use("/v1", router)

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
