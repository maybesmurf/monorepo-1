// @ts-ignore
import faker from "@faker-js/faker"
import { prisma } from "@Libs/prisma"
import { Dog, DogSex } from "@prisma/client"
import CrudInterface, { ListParams } from "@Utils/crudInterface"
import { getRandomValueFromArray } from "@Utils/randomFromArray"

// Things you do in a service:
// Query your database
// Authentication logic
// Communicate with other services (i.e. Use the AKC API)
// Any other business logic (i.e. converting currencies, pick colors of flowers, etc.)

export default class DogService implements CrudInterface<Dog> {
	get(params: { dogId: string }): Promise<Dog | null> {
		return prisma.dog.findUnique({ where: { id: params.dogId } })
	}

	list({ where, skip, take, orderBy }: ListParams<Dog>): Promise<Dog[]> {
		const { sex, ...rest } = where
		const newWhere = { sex: sex?.toUpperCase() as DogSex, ...rest }
		return prisma.dog.findMany({ where: newWhere, skip, take, orderBy })
	}

	create(dog: Dog): Promise<Dog> {
		return prisma.dog.create({
			data: dog
		})
	}

	delete(params: { dogId: string }): Promise<Dog | null> {
		return prisma.dog.delete({ where: { id: params.dogId } })
	}

	update(params: Dog): Promise<Dog | null> {
		const { id, ...dog } = params

		return prisma.dog.update({ where: { id }, data: dog })
	}
}
