import express from "express"
const router = express.Router()

router.get("/check", (req: any, reply: any) => {
	reply.send({ message: "Made it to a nested route!" })
})

export default router
