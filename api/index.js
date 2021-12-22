// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })
fastify.register(require("fastify-cors"), {})

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

fastify.get("/", async (req, reply) => {
	reply.send("What up!")
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
		await fastify.listen(process.env.API_PORT || 5000, "0.0.0.0")
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
