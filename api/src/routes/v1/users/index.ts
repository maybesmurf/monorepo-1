import express from "express"
const router = express.Router()
// @ts-ignore
import faker from "@faker-js/faker"
import { prisma } from "../../../services/prisma"
import { formatSuccess } from "../../../utils/responseHandlers"
import { State } from "@prisma/client"

// Write a new row
router.post("/", async (req, response) => {
	const resp = await prisma.user.create({
		data: {
			id: faker.datatype.uuid(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			streetAddress: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr() as State,
			postalCode: faker.address.zipCode(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email()
		}
	})

	return response.status(200).json(formatSuccess(resp))
})

// Get all rows
router.get("/", async (req, response) => {
	const all = await prisma.user.findMany()
	return response.status(200).json(formatSuccess(all))
})

router.put("/", async (req, res) => {
	const { id, ...user } = req.body
	const update = await prisma.user.update({ where: { id }, data: user })
	return res.status(200).json(formatSuccess({ message: update }))
})

router.delete("/", async (req, res) => {
	const { id } = req.body
	const update = await prisma.user.delete({ where: { id } })
	return res.status(200).json(formatSuccess({ message: update }))
})

export default router