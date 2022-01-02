import express from "express"
const router = express.Router()
import { auth } from "../services/firebase/auth"

router.get("/user", async (req: any, res: any) => {
	const user = await auth.getUser(req.query.uid)

	res.json({ user })
})

export default router
