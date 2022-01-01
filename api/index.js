const { SENTRY_DISABLE, SENTRY_DSN, ENVIRONMENT } = process.env

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })
fastify.register(require("fastify-cors"), {})

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const Sentry = require("@sentry/node")
const Tracing = require("@sentry/tracing")

if (!SENTRY_DISABLED) {
	Sentry.init({
		dsn: SENTRY_DSN,
		environment: ENVIRONMENT,
		tracesSampleRate: 1.0
	})
}

// fastify.get("/error", async (req, reply) => {
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

fastify.get("/", async (req, reply) => {
	reply.send({ message: "What up!" })
})

// Write a new row
fastify.post("/create", async (req, reply) => {
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
fastify.get("/all", async (req, reply) => {
	const all = await prisma.test.findMany()

	return reply.send({ [Date.now()]: all })
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(5000, "0.0.0.0")
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
