import supertest from "supertest"
import app from "@Root/server"
import { prisma } from "@Libs/prisma"

describe("Dogs routes", () => {
	beforeAll(async () => {
		await prisma.dog.deleteMany({ where: { id: "123" } })

		await prisma.dog.create({
			data: {
				id: "123",
				callName: "Fido",
				akcBreed: "",
				primaryOwnerId: "a1b2c3",
				sex: "MALE"
			}
		})
	})

	describe("GET /", () => {
		it("should return 404 when not dog found", async () => {
			const response = await supertest(app).get("/v1/dogs/notadog")
			expect(response.status).toEqual(404)
			expect(response.body).toHaveProperty("error", "Dog not found")
		})

		it("should return dog when found", async () => {
			const response = await supertest(app).get("/v1/dogs/123")
			expect(response.status).toEqual(200)
			expect(response.body).toHaveProperty("callName", "Fido")
		})
	})
})
