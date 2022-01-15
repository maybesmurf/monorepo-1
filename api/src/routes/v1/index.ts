import express from "express"
const router = express.Router()

import dogs from "./dogs"

router.use("/dogs", dogs)

// Ping v1
router.get("/", async (req: any, response: any) => {
	response.json({ message: "Yes, what up!" })
})

export default router
