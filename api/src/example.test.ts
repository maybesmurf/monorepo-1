const supertest = require("supertest")
import app from "./server"

test("Ping the server", () => {
	it("responds", async () => {
		await supertest(app)
			.get("/")
			.expect(200)
			.then((response) => {
				expect(response.body).toBe("Go, dog, go.")
			})
	})
})
