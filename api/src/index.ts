import * as dotenv from "dotenv"
dotenv.config()
const { SENTRY_DISABLED, SENTRY_DSN, ENVIRONMENT } = process.env

import Fastify, { FastifyInstance } from "fastify"
const server: FastifyInstance = Fastify({ logger: true })
server.register(require("fastify-cors"), {})

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import Sentry from "@sentry/node"
// Needed for supporting tracing!
import Tracing from "@sentry/tracing"

// import { initializeFirebase } from "/services/firebase"

// if (!SENTRY_DISABLED) {
// 	Sentry.init({
// 		dsn: SENTRY_DSN,
// 		environment: ENVIRONMENT,
// 		tracesSampleRate: 1.0
// 	})
// }

// initializeFirebase()

server.get("/", async (req: any, reply: any) => {
	reply.send({ message: "What up!" })
})

// Write a new row
server.post("/create", async (req: any, reply: any) => {
	console.log({ "req.body": req.body })
	if (!req.body || !req.body.name) return reply.send({ message: "Need to provide a name." })

	const resp = await prisma.test.create({
		data: {
			name: req.body.name
		}
	})

	return reply.send({ [Date.now()]: resp })
})

// Get all rows
server.get("/all", async (req: any, reply: any) => {
	const all = await prisma.test.findMany()

	return reply.send({ [Date.now()]: all })
})

server.post("/create-new-user", async (req: any, reply: any) => {})

// Run the server!
const start = async () => {
	try {
		await server.listen(5000, "0.0.0.0")
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}
start()

// fastify.get("/error", async (req: any, reply: any) => {
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
// 			reply.status(500).send({ message: "We messed up :(" })
// 		}
// 	}, 99)
// })
