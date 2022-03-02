import { prisma } from "@Prisma"
import type { NextPage } from "next"
import Home from "@Components/features/Home"

const HomePage: NextPage = () => <Home />

export const getStaticProps = async () => {
	const dogs = await prisma.dog.findMany({})
	console.log(dogs)

	return { props: {} }
}

export default HomePage
