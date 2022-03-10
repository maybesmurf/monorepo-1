/** DO NOT MOVE THESE IMPORTS
 * 	THEY MUST BE DECLARED BEFORE EVERYTHING
 */
/* eslint-disable import/first */
import dotenv from "dotenv"

dotenv.config()
import moduleAlias from "module-alias"

moduleAlias.addAliases({
	"@Root": __dirname + "/",
	"@Libs": __dirname + "/libs",
	"@v1": __dirname + "/v1",
	"@Utils": __dirname + "/utils"
})

import { errorHandler, ResponseError } from "@Utils/errorHandlers"
import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
import v1 from "@v1/index"
import { prisma } from "@doggo/prisma"

const app = express()

import Sentry, { initSentry } from "@Libs/sentry"

initSentry()

// Firebase
// import { initFirebase } from "./services/firebase"
// initFirebase()

// Sentry request handler must be first handler on app for Sentry reasons
app.use(Sentry.Handlers.requestHandler())
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000"
	})
)
app.use(express.json())
app.use(cookieParser())

app.use("/v1", v1)
// Ping the server
app.get("/", async (req, res) =>
	res.status(200).json({ message: "Go, dog, go." })
)

app.get("/some-authy-boi", async (req, res) => {
	const sessionToken = req.cookies["next-auth.session-token"]
	if (!sessionToken) {
		return res.status(401).json({ message: "No session provided" })
	}

	const result = await prisma.session.findFirst({
		where: { sessionToken }
	})

	if (!result) {
		return res.status(401).json({ message: "No valid sessions exist." })
	}
	return res.status(200).json({ message: "You authy little lad." })
})

// Force an error
// Please only use this route for development and testing purposes.
app.get("/error", () => {
	throw new ResponseError(
		`API Error in environment: ${
			process.env.IS_DEV
				? "development"
				: process.env.IS_TESTING
				? "testing"
				: process.env.NODE_ENV
		}`,
		{ statusCode: 418 }
	)
})

// Error handlers
// Must come after ALL other middlewares and routes!
// Sentry error handler must be first error handler for Sentry reasons
app.use(Sentry.Handlers.errorHandler())
app.use(errorHandler)

export default app
