import express from "express"
import faker from "@faker-js/faker"
import { DogSex } from "@prisma/client"
import { prisma } from "../../../services/prisma"

const router = express.Router()
// Write a new row
router.post("/", async (req: any, response: any) => {
	const resp = await prisma.dog.create({
		data: {
			callName: faker.name.firstName(),
			akcBreed: faker.animal.dog(),
			sex: "MALE" as DogSex,
			birthdate: faker.date.past(),
			birthplace: "USA",
			akcRegisteredName: faker.animal.dog.name,
			akcTitlePrefix: "AKC",
			akcTitleSuffix: "AKC",
			akcMeasuredHeight: Math.floor(Math.random()) * (24 - 12 + 1) + 12,
			registrationNumber: faker.datatype.uuid(),
			breederName: faker.name.firstName() + " " + faker.name.lastName(),
			sireName: faker.name.firstName(),
			damName: faker.name.firstName(),
			primaryOwnerId: "123",
			jumpHeight: Math.floor(Math.random()) * (24 - 12 + 1) + 12
		}
	})

	return response.json({ [Date.now()]: resp })
})

// Get all rows
router.get("/", async (req: any, response: any) => {
	const all = await prisma.dog.findMany()
	return response.json({ [Date.now()]: all })
})

router.put("/", async (req, res) => {
	const { id, ...dog } = req.body
	const update = await prisma.dog.update({ where: { id }, data: dog })
	return res.json({ message: update })
})

router.delete("/", async (req, res) => {
	const { id } = req.body
	const update = await prisma.dog.delete({ where: { id } })
	return res.json({ message: update })
})

router.delete

export default router
