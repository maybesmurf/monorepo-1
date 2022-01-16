import express from "express"
import { formatSuccess } from "../../utils/responseHandlers"
const router = express.Router()

import dogs from "./dogs"

router.use("/dogs", dogs)

// Ping v1
router.get("/", async (req, response) => {
	response.status(200).json(formatSuccess({ message: "Yes, what up!" }))
})

export default router
