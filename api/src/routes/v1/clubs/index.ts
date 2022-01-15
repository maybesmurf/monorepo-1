import express from "express"
const router = express.Router()
import faker from "@faker-js/faker"
import { prisma } from "../../../services/prisma"

// Write a new row
router.post("/", async (req: any, response: any) => {
	const resp = await prisma.club.create({
		data: {
			name: faker.name.lastName() + "'s " + faker.company.companyName() + " Club"
		}
	})

	return response.json({ [Date.now()]: resp })
})

// Get all rows
router.get("/", async (req: any, response: any) => {
	const all = await prisma.club.findMany()
	return response.json({ [Date.now()]: all })
})

router.put("/", async (req, res) => {
	const { id, ...club } = req.body
	const update = await prisma.club.update({ where: { id }, data: club })
	return res.json({ message: update })
})

router.delete("/", async (req, res) => {
	const { id } = req.body
	const update = await prisma.club.delete({ where: { id } })
	return res.json({ message: update })
})

export default router
