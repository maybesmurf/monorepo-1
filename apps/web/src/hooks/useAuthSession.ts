import { useSession } from "next-auth/react"
import { User } from "@Prisma/client"

interface IAuthSession {
	authUser: User | undefined
	authExpires: string | undefined
	authStatus: "loading" | "authenticated" | "unauthenticated"
}

export const useAuthSession = (): IAuthSession => {
	const { data, status } = useSession()

	// The typecast below is needed so we don't use the default type from useSession.
	return { authUser: data?.user as User, authExpires: data?.expires, authStatus: status }
}
