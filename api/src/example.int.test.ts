const supertest = require("supertest")
import app from "./server"

describe("Ping the server", () => {
	it("test", () => {})

	// it("responds", async () => {
	// 	await supertest(app)
	// 		.get("/")
	// 		.expect(200)
	// 		.then((response) => {
	// 			expect(response.body).toEqual({ message: "Go, dog, go." })
	// 		})
	// })
	// it("responds on v1", async () => {
	// 	await supertest(app)
	// 		.get("/v1")
	// 		.expect(200)
	// 		.then((response) => {
	// 			expect(response.body).toEqual({ message: "v1 of the API is up and running!" })
	// 		})
	// })
})
