import { NextFunction, Request, Response } from "express"
import { errorHandler, ResponseError } from "../errorHandlers"

describe("errorHandler", () => {
	it("responds with ok equal to false", () => {
		const mockResponse: Partial<Response> = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis()
		}
		const nextFunction: NextFunction = jest.fn()

		errorHandler(
			new ResponseError("some test error", { statusCode: 500, info: "some testing info" }),
			{} as Request,
			mockResponse as Response,
			{} as any
		)

		expect(mockResponse.status).toHaveBeenCalledWith(500)
		expect(mockResponse.json).toHaveBeenCalledWith({
			ok: false,
			error: "some test error",
			errorInfo: "some testing info"
		})
		expect(nextFunction).not.toHaveBeenCalled()
	})
})
