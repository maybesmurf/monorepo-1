import express from "express"
import clubs from "./routes/clubs"
import dogs from "./routes/dogs"
import trials from "./routes/trials"
import users from "./routes/users"
import { auth } from "./middlewares/auth"

const router = express.Router()

router.use(express.json())

router.use("/clubs", clubs)
router.use("/dogs", dogs)
router.use("/trials", trials)
router.use("/users", users)

// Ping v1
router.get("/", async (req, res) => {
	res.status(200).json({ message: "v1 of the API is up and running!" })
})

// eslint-disable-next-line arrow-body-style
router.get("/auth", auth, async (req, res) => {
	return res.status(200).json({ message: "Authenticated" })
})

export default router
