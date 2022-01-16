import express from "express"
const router = express.Router()
// @ts-ignore
import faker from "@faker-js/faker"
import { prisma } from "../../../services/prisma"
import { getRandomValueFromArray } from "../../../utils/randomFromArray"
import { AcceptanceMethod } from "@prisma/client"
import { formatSuccess } from "../../../utils/responseHandlers"

// Write a new row
router.post("/", async (req, response) => {
	const resp = await prisma.trial.create({
		data: {
			hostingClubId: faker.datatype.uuid(),
			akcEventNumber: faker.datatype.uuid(),
			venue: faker.address.cardinalDirection() + "" + faker.address.streetName() + "Park",
			venueStreetAddress: faker.address.streetAddress(),
			venueCity: faker.address.city(),
			venueState: faker.address.stateAbbr(),
			venuePostalCode: faker.address.zipCode(),
			type: getRandomValueFromArray(["Outdoor on Grass", "Indoor on Turf", "Indoor on Grass"]),
			signUpOpenDatetime: faker.date.recent(),
			signUpCloseDateTime: faker.date.soon(),
			acceptanceMethod: getRandomValueFromArray<AcceptanceMethod>(["RANDOMDRAW", "FIRSTRECEIVED"]),
			checksPayableTo: faker.company.companyName(),
			secretaryId: faker.datatype.uuid(),
			trialChairmanName: faker.name.firstName() + " " + faker.name.lastName(),
			trialChairmanEmail: faker.internet.exampleEmail(),
			trialChairmanStreetAddress: faker.address.streetAddress(),
			trialChairmanCity: faker.address.city(),
			trialChairmanState: faker.address.stateAbbr(),
			trialChairmanPostalCode: faker.address.zipCode(),
			costFirstEntry: Number(faker.finance.amount(14, 27, 0)),
			costSecondEntry: Number(faker.finance.amount(14, 27, 0)),
			costThirdEntry: Number(faker.finance.amount(14, 27, 0)),
			costFourthEntry: Number(faker.finance.amount(14, 27, 0)),
			catalogFee: Number(faker.finance.amount(4, 8, 0)),
			confirmationLetter: "Hey, you're signed up!"
		}
	})

	return response.status(200).json(formatSuccess({ [Date.now()]: resp }))
})

router.get("/", async (req, response) => {
	const all = await prisma.trial.findMany()
	return response.status(200).json(formatSuccess({ [Date.now()]: all }))
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

export default router
