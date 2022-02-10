import { render, screen } from "./test-utils"
import { Button } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<Button />)

		screen.getByText("Test Text")
	})

	it("Renders with text", async () => {
		render(<Button text="Test Text" />)

		screen.getByText("Test Text")
	})

	it("Renders with border", async () => {
		render(<Button text="Test Text" />)

		const elem = screen.getByText("Test Text")

		expect(elem).toHaveStyle({ border: "1px solid black" })
	})
})
