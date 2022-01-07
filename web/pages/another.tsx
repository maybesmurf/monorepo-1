import type { NextPage } from "next"

const Home: NextPage = ({ theTestVar }: any) => {
	return (
		<div>
			<p>derp</p>
			<p>{theTestVar}</p>
		</div>
	)
}

export default Home

export const getStaticProps = async () => {
	return {
		props: {
			theTestVar: process.env.NEXT_PUBLIC_TEST || ""
		}
	}
}
