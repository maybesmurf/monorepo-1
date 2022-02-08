import { useRouter } from "next/router"

interface Props {
	children: React.ReactNode
	path: string
}

const ShallowRoute = ({ path, children }: Props) => {
	const router = useRouter()

	return <a onClick={() => router.push(path, undefined, { shallow: true })}>{children}</a>
}

export default ShallowRoute
