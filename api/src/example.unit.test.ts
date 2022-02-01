import { getRandomValueFromArray } from "@Utils/randomFromArray"

describe("Unit Test Sample", () => {
	it("responds", () => {
		getRandomValueFromArray([1, 2, 3, 4])
		expect(true).toBeTruthy()
	})
})
