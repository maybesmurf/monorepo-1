import { ReactNode } from "react"
import { Button, Collapse, useMantineTheme } from "@Components/shared"
import { useRouter } from "next/router"
import Link from "next/link"
interface Props {
	// isActive: boolean
	path: string
	buttonLabel: string
	icon: JSX.Element
	children?: ReactNode
}

export const ListItem = ({ path, icon, buttonLabel, children }: Props) => {
	const { route } = useRouter()
	const { colors, spacing } = useMantineTheme()

	// TODO: What was the background she shows in the navbar? Active state or hover?
	/* <div style={{ borderRadius: radius.sm, background: isActive ? colors.teal[1] : "transparent" }}> */
	return (
		<>
			<Link href={path} passHref>
				<a style={{ textDecoration: "none" }}>
					<Button
						variant="subtle"
						fullWidth
						leftIcon={icon}
						styles={{
							icon: { height: "100% !important", marginRight: spacing.lg },
							inner: { justifyContent: "flex-start", color: colors.navy[9] }
						}}
					>
						{buttonLabel}
					</Button>
				</a>
			</Link>
			<Collapse in={route.includes(path)}>{children}</Collapse>
		</>
	)
}
