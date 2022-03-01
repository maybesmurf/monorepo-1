import { buildDog } from "@Root/../.jest/dogGenerator"
import { prisma } from "@doggo/prisma"
import { DogSex } from "@doggo/prisma/client"
import DogService from "./index"

const dogService = new DogService()

describe("Dog Services (UNIT)", () => {
	it("uses uppercase to match enum", async () => {
		const dog = buildDog({ sex: "FEMALE" })

		const spy = jest.spyOn(prisma.dog, "findMany").mockResolvedValue([dog])

		await dogService.list({
			where: { sex: "female" as DogSex },
			skip: 0,
			take: 10
		})
		expect(spy).toHaveBeenCalledWith({
			where: { sex: "FEMALE" },
			skip: 0,
			take: 10,
			orderBy: undefined
		})
	})
})
