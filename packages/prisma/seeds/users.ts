// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"
import { State, User } from "@prisma/client"

export const users = [...Array(5)].map(
	(): User => ({
		id: faker.datatype.uuid(),
		name: faker.name.firstName(),
		email: faker.internet.email(),
		emailVerified: new Date(),
		image: "whatever",
		streetAddress: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.stateAbbr() as State,
		postalCode: faker.address.zipCode(),
		phone: faker.phone.phoneNumber(),
		akcJudgeId: faker.datatype.uuid(),
		akcLicense: faker.datatype.uuid(),
		akcSecretaryId: faker.datatype.uuid(),
		emergencyContactName: faker.name.firstName(),
		emergencyContactPhone: faker.phone.phoneNumber()
	})
)
