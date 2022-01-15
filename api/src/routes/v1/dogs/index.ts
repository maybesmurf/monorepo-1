import express from "express"
const router = express.Router()
import faker from "@faker-js/faker"
import { DogSex } from "@prisma/client"
import { prisma } from "../../../services/prisma"
import { getRandomValueFromArray } from "src/utils/randomFromArray"

// Write a new row
router.post("/", async (req: any, response: any) => {
	const resp = await prisma.dog.create({
		data: {
			callName: faker.name.firstName(),
			akcBreed: faker.animal.dog(),
			sex: getRandomValueFromArray<DogSex>(["MALE", "FEMALE"]),
			birthdate: faker.date.past(),
			birthplace: faker.address.countryCode(),
			akcRegisteredName: faker.name.title + "" + faker.name.firstName() + " of " + faker.address.city,
			akcTitlePrefix: "AKC",
			akcTitleSuffix: "AKC",
			akcMeasuredHeight: Math.floor(Math.random()) * (24 - 12 + 1) + 12,
			registrationNumber: faker.datatype.uuid(),
			breederName: faker.name.firstName() + " " + faker.name.lastName(),
			sireName: faker.name.firstName(),
			damName: faker.name.firstName(),
			primaryOwnerId: faker.datatype.uuid(),
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

export default router
