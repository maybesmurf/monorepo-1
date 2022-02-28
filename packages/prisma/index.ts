import { PrismaClient } from "@prisma/client"

export const prisma =
	globalThis.prisma ||
	new PrismaClient({
		log: ["query", "error", "warn"]
	})

if (process.env.NODE_ENV !== "production") {
	globalThis.prisma = prisma
}

export * from ".prisma/client/index.d"
export * from "@prisma/client/runtime"
