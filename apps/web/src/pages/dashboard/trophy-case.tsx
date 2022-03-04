import { getLayout } from "@Components/layouts/Dashboard"
import { useQuery } from "react-query"
import fetch from "@Utils/fetch"
import { useSession } from "next-auth/react"

const TrophyCase = () => {
	const session = useSession()
	console.log(session)
	const { data, refetch } = useQuery(
		"trophy-case",
		async () => {
			return fetch
				.get("/some-authy-boi", {
					authorization: `Bearer ${session?.data?.user?.id} ${session.data?.expires}`
				})
				.then((res) => res)
		},
		{ enabled: false }
	)

	return (
		<div>
			<button onClick={() => refetch()}>Make an authenticated request.</button>
			<p>{JSON.stringify(data) || "not yet..."}</p>
		</div>
	)
}

TrophyCase.getLayout = getLayout

export default TrophyCase
