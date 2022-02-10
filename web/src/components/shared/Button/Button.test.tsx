import { render, screen } from "./test-utils"
import { Button } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<Button>Test Text</Button>)

		screen.getByText("Test Text")
	})

	it("Doesn't allow disabled on <a> tag", async () => {
		render(
			<Button component="a" disabled>
				Test Text
			</Button>
		)

		expect(screen.getByText("Test Text").closest("a")).toBeInTheDocument()
	})
})
