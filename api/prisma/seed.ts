import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const items = [
	{
		name: "Spot"
	},
	{
		name: "Hazel"
	},
	{
		name: "Bolt"
	}
]

const main = async () => {
	items.forEach(async (item) => {
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
