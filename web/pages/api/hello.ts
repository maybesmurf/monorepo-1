import { createApiHandler } from "../../utils/createApiHandler"

const handler = async (req: any, res: any) => {
	throw new Error("API throw error test")
	res.status(200).json({ name: "John Doe" })
}

export default handler
