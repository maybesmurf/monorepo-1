// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import { PrismaClient } from "@prisma/client"
import { users } from "./seeds/users"
import { dogs } from "./seeds/dogs"
const prisma = new PrismaClient()

const main = async () => {
	users.forEach(async (item) => {
		await prisma.user.create({
			data: item
		})
	})

	dogs.forEach(async (item) => {
		await prisma.dog.create({
			data: item
		})
	})
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
