import faker from "@faker-js/faker"
import { prisma } from "@Prisma"
import { AcceptanceMethod } from "@Prisma/client"
import { getRandomValueFromArray } from "@Utils/randomFromArray"
import express from "express"
import { auth } from "@v1/middlewares/auth"

const router = express.Router()

// Write a new row
router.post("/", async (req, response) => {
	const { hostingClubId, secretaryId } = req.body

	// const resp = await prisma.trial.create({
	// 	data: {
	// 		hostingClubId,
	// 		akcEventNumber: faker.datatype.uuid(),
	// 		venue:
	// 			faker.address.cardinalDirection() +
	// 			"" +
	// 			faker.address.streetName() +
	// 			"Park",
	// 		venueStreetAddress: faker.address.streetAddress(),
	// 		venueCity: faker.address.city(),
	// 		venueState: faker.address.stateAbbr(),
	// 		venuePostalCode: faker.address.zipCode(),
	// 		type: getRandomValueFromArray([
	// 			"Outdoor on Grass",
	// 			"Indoor on Turf",
	// 			"Indoor on Grass"
	// 		]),
	// 		signUpOpenDatetime: faker.date.recent(),
	// 		signUpCloseDateTime: faker.date.soon(),
	// 		acceptanceMethod: getRandomValueFromArray<AcceptanceMethod>([
	// 			"RANDOMDRAW",
	// 			"FIRSTRECEIVED"
	// 		]),
	// 		checksPayableTo: faker.company.companyName(),
	// 		secretaryId,
	// 		trialChairmanName: faker.name.firstName() + " " + faker.name.lastName(),
	// 		trialChairmanEmail: faker.internet.exampleEmail(),
	// 		trialChairmanStreetAddress: faker.address.streetAddress(),
	// 		trialChairmanCity: faker.address.city(),
	// 		trialChairmanState: faker.address.stateAbbr(),
	// 		trialChairmanPostalCode: faker.address.zipCode(),
	// 		costFirstEntry: Number(faker.finance.amount(14, 27, 0)),
	// 		costSecondEntry: Number(faker.finance.amount(14, 27, 0)),
	// 		costThirdEntry: Number(faker.finance.amount(14, 27, 0)),
	// 		costFourthEntry: Number(faker.finance.amount(14, 27, 0)),
	// 		catalogFee: Number(faker.finance.amount(4, 8, 0)),
	// 		confirmationLetter: "Hey, you're signed up!"
	// 	}
	// })

	return response.status(200).json({ status: "currently not implemented" })
})

router.get("/", auth, async (req, response) => {
	console.log(req.query)
	const page = Number(req.query.page) - 1
	const take = Number(req.query.take)
	const skip = page * take
	const count = await prisma.trial.count()
	const trials = await prisma.trial.findMany({ skip, take })
	return response.status(200).json({ count, trials })
})

router.put("/", async (req, res) => {
	const { id, ...trial } = req.body
	const update = await prisma.trial.update({ where: { id }, data: trial })
	return res.json({ message: update })
})

router.delete("/", async (req, res) => {
	const { id } = req.body
	const update = await prisma.trial.delete({ where: { id } })
	return res.json({ message: update })
})

// Base route: /v1/trials
export default router
