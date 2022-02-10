import { render, screen, getComputedStyle } from "./test-utils"
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

		expect(screen.getByText("Test Text").closest("a")).not.toBeDisabled()
	})

	it("Uses md radius on xs size", async () => {
		render(
			<Button id="button" size="xs">
				Test Text
			</Button>
		)

		const style = getComputedStyle("button")
		expect(style.borderRadius).toBe("8px")
	})

	it("Uses lg radius on sm and up", async () => {
		render(
			<Button id="button" size="sm">
				Test Text
			</Button>
		)

		const style = getComputedStyle("button")
		expect(style.borderRadius).toBe("16px")
	})
})
