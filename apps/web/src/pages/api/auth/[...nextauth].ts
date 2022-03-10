import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@doggo/prisma"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	// Configure one or more authentication providers
	providers: [
		// TODO: We are going to do Amazon, Google, Facebook, and Twitter
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET
		})
		// ...add more providers here
	],
	callbacks: {
		async session({ token, user, session }) {
			session.user = user
			return session
		}
	}
})
