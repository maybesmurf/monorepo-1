import { prisma } from "@doggo/prisma"
import { ResponseError } from "@Root/utils/errorHandlers"
import { Request, Response, NextFunction } from "express"

// eslint-disable-next-line consistent-return
export const auth = async (req: Request, res: Response, next: NextFunction) => {
	const sessionToken = req.cookies["next-auth.session-token"]
	if (!sessionToken) {
		throw new ResponseError("You must be logged in to access this resource", {
			statusCode: 400
		})
	}

	const result = await prisma.session.findFirst({
		where: { sessionToken }
	})

	if (!result) {
		throw new ResponseError("Invalid authentication provided.", {
			statusCode: 401
		})
	}

	next()
}
