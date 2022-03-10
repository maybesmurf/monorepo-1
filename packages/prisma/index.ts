import { PrismaClient } from "@prisma/client"

export const prisma: PrismaClient =
	(globalThis as any).prisma ||
	new PrismaClient({
		log: ["query", "error", "warn"]
	})

if (process.env.NODE_ENV !== "production") {
	;(globalThis as any).prisma = prisma
}
