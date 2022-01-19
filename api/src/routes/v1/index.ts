import express from "express"
const router = express.Router()

import clubs from "./clubs"
import dogs from "./dogs"
import trials from "./trials"
import users from "./users"

router.use("/clubs", clubs)
router.use("/dogs", dogs)
router.use("/trials", trials)
router.use("/users", users)

// Ping v1
router.get("/", async (req, response) => {
	response.status(200).json({ message: "Yes, what up!" })
})

export default router
