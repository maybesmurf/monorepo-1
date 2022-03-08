import { prisma } from "@Prisma"
import { Request, Response, NextFunction } from "express"

// eslint-disable-next-line consistent-return
export const auth = async (req: Request, res: Response, next: NextFunction) => {
	const sessionToken = req.cookies["next-auth.session-token"]
	if (!sessionToken) {
		return res.status(401).json({ message: "No session provided" })
	}

	const result = await prisma.session.findFirst({
		where: { sessionToken }
	})

	if (!result) {
		return res.status(401).json({ message: "No valid sessions exist." })
	}

	next()
}
