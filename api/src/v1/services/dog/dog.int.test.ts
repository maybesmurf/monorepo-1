// TODO: Absolute import
import { buildDog } from "../../../../.jest/dogGenerator"
import DogService from "./index"
import { prisma } from "@Libs/prisma"
import faker from "@faker-js/faker"

const dogService = new DogService()

describe("Dog Services", () => {
	faker.seed(123)

	const dog1 = buildDog({ id: faker.datatype.uuid(), callName: "BBB" })
	const dog2 = buildDog({ id: faker.datatype.uuid(), callName: "AAA", sex: "FEMALE" })
	const dog3 = buildDog({ id: faker.datatype.uuid(), callName: "DDD", sex: "FEMALE" })
	const dog4 = buildDog({ id: faker.datatype.uuid(), callName: "CCC" })

	const createDog = buildDog()

	const dogToUpdate = dog1
	const { id: dogId } = dog1

	beforeEach(async () => {
		// This is weird, why do I have to do this deleteMany?
		await prisma.dog.deleteMany({ where: { id: { in: [dog1.id, dog2.id, dog3.id, dog4.id, createDog.id] } } })
		await prisma.dog.createMany({ data: [dog1, dog2, dog3, dog4] })
	})

	afterEach(async () => {
		await prisma.dog.deleteMany({ where: { id: { in: [dog1.id, dog2.id, dog3.id, dog4.id, createDog.id] } } })
	})

	describe("v1", () => {
		it("get a dog", async () => {
			const dogResult = await dogService.get({ dogId: dogId })
			expect(dogResult).toEqual(dog1)
		})

		it("list only female dogs", async () => {
			const listResult = await dogService.list({ where: { sex: "FEMALE" }, skip: 0, take: 10 })
			expect(listResult).toEqual(expect.arrayContaining([dog2, dog3]))
		})

		it("sort dogs by call name", async () => {
			const listResult = await dogService.list({ where: {}, skip: 0, take: 10, orderBy: { callName: "asc" } })

			// Filter to only test dogs
			const filteredResult = listResult.filter(
				(dog) => dog.id === dog1.id || dog.id === dog2.id || dog.id === dog3.id || dog.id === dog4.id
			)

			// Pare down to just the call names for comparison
			const resultCallNames = filteredResult.map((dog) => dog.callName)
			const testCallNames = [dog1, dog2, dog3, dog4].map((dog) => dog.callName).sort()

			expect(resultCallNames).toEqual(testCallNames)
		})

		it("creates a dog", async () => {
			const result = await dogService.create(createDog)
			expect(result).toEqual(createDog)
		})

		it("delete a dog", async () => {
			await dogService.delete({ dogId })
			const result = await dogService.get({ dogId })
			expect(result).toEqual(null)
		})

		it("update a dog", async () => {
			await dogService.update({ ...dogToUpdate, callName: "ZZZ" })
			const result = await dogService.get({ dogId: dogToUpdate.id })
			expect(result).toHaveProperty("callName", "ZZZ")
		})
	})
})
