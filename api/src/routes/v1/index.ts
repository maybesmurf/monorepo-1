import express from "express"

import { prisma } from "../../services/prisma"
const { dog } = prisma

const router = express.Router()

// Ping v1
router.get("/", async (req: any, response: any) => {
	response.json({ message: "Yes, what up!" })
})

// Write a new row
router.post("/create", async (req: any, response: any) => {
	if (!req.body || !req.body.name) return response.status(400).json({ message: "Need to provide a name." })

	const resp = await prisma.dog.create({
		data: {
			akcBreed: "Labrador Retriever",
			callName: "King William of Doggy Bonez III",
			primaryOwnerId: "123123",
			sex: "MALE"
		}
	})

	return response.json({ [Date.now()]: resp })
})

// Get all rows
router.get("/all", async (req: any, response: any) => {
	const all = await prisma.dog.findMany()

	return response.json({ [Date.now()]: all })
})

export default router
