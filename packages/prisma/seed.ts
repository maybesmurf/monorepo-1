import { PrismaClient } from "@prisma/client"
import { clubs } from "./seeds/clubs"
import { dogs } from "./seeds/dogs"
import { generateRings } from "./seeds/rings"
import { generateTrialDays } from "./seeds/trialDays"
import { generateTrials } from "./seeds/trials"
import { users } from "./seeds/users"
const prisma = new PrismaClient()

const generateEntitySeedWithForeignKeys = (
	records: any,
	entityCreator: any
): [] => {
	const ids = records.map((record: any) => record.id)
	return entityCreator(ids)
}

const main = async () => {
	const createUsers = async () => {
		for (const user of users) {
			await prisma.user.create({
				data: user
			})
		}
	}

	const createDogs = async () => {
		for (const dog of dogs) {
			await prisma.dog.create({
				data: dog
			})
		}
	}

	const createClubs = async () => {
		for (const club of clubs) {
			await prisma.club.create({
				data: club
			})
		}
	}

	console.time("createUsers")
	await createUsers()
	console.timeEnd("createUsers")
	console.time("createDog")
	await createDogs()
	console.timeEnd("createDog")
	console.time("createClubs")
	await createClubs()
	console.timeEnd("createClubs")

	const trials = generateEntitySeedWithForeignKeys(
		await prisma.club.findMany(),
		generateTrials
	)

	const createTrials = async () => {
		for (const trial of trials) {
			await prisma.trial.create({
				data: trial
			})
		}
	}

	console.time("createTrials")
	await createTrials()
	console.timeEnd("createTrials")

	const trialDays = generateEntitySeedWithForeignKeys(
		await prisma.trial.findMany(),
		generateTrialDays
	)

	const createTrialDays = async () => {
		for (const trialDay of trialDays) {
			await prisma.trialDay.create({
				data: trialDay
			})
		}
	}

	console.time("createTrialDays")
	await createTrialDays()
	console.timeEnd("createTrialDays")

	const rings = generateEntitySeedWithForeignKeys(
		await prisma.trialDay.findMany(),
		generateRings
	)

	const createRings = async () => {
		for (const ring of rings) {
			await prisma.ring.create({
				data: ring
			})
		}
	}

	console.time("createRings")
	await createRings()
	console.timeEnd("createRings")
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		console.log("You have successfully seeded your database.")
		await prisma.$disconnect()
	})
