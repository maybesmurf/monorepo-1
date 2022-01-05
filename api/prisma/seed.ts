import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const main = async () => {
	const spot = await prisma.test.upsert({
		where: { email: "test@test.com" },
		create: {
			name: "Spot"
		}
	})

	const hazel = await prisma.test.upsert({
		where: { email: "example@example.com" },
		create: {
			name: "Hazel"
		}
	})

	const bolt = await prisma.test.upsert({
		where: { email: "sample@sample.com" },
		create: {
			name: "Bolt"
		}
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
