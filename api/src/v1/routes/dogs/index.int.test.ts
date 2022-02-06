import supertest from "supertest"
import app from "@Root/server"
import { prisma } from "@Libs/prisma"

describe("Dogs routes", () => {
	// beforeAll(async () => {
	// 	await prisma.dog.create({
	// 		data: {
	// 			id: "123",
	// 			callName: "Fido",
	// 			akcBreed: "",
	// 			primaryOwnerId: "a1b2c3",
	// 			sex: "MALE"
	// 		}
	// 	})
	// })

	// afterAll(async () => {
	// 	await prisma.dog.deleteMany({})
	// })

	it("TODO", () => {})

	// it("should return 404 when no dog found", async () => {
	// 	const response = await supertest(app).get("/v1/dogs/123")
	// 	expect(response.status).toEqual(404)
	// 	expect(response.body).toEqual({
	// 		ok: false,
	// 		error: "Dog not found"
	// 	})
	// })

	// it("should return dog when found", async () => {
	// 	const response = await supertest(app).get("/v1/dogs/123")
	// 	expect(response.status).toEqual(200)
	// 	expect(response.body).toEqual({
	// 		id: "123",
	// 		callName: "Fido"
	// 	})
	// })
})
