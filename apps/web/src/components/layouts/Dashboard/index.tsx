import { ReactNode, useState } from "react"
import { AppShell } from "@Components/shared"
import Header from "./Header"
import { useMantineTheme } from "@Components/shared"
import { useViewportSize } from "@mantine/hooks"
import Navbar from "./Navbar"

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	const [opened, setOpened] = useState(false)
	const { other, spacing } = useMantineTheme()
	const { width, height } = useViewportSize()
	const isXlViewport = width >= 1200

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			styles={{
				root: {
					display: "flex",
					flexDirection: "column",
					maxHeight: "100vh",
					overflow: "hidden"
				},
				main: {
					minHeight: "initial",
					maxHeight: height - 100,
					overflow: "auto",
					padding: isXlViewport ? `${other.spacing.xxxl}` : spacing.lg,
					paddingTop: other.spacing.xxl,
					paddingBottom: spacing.md
				}
			}}
			header={<Header opened={opened} setOpened={setOpened} />}
			navbar={<Navbar opened={opened} setOpened={setOpened} />}
		>
			{children}
		</AppShell>
	)
}

export const getLayout = (page: any) => <Layout>{page}</Layout>

export default Layout
