import { ReactNode } from "react"
import { Button, Collapse, useMantineTheme } from "@Components/shared"
import { useRouter } from "next/router"
import Link from "next/link"
interface Props {
	isActive: boolean
	path: string
	buttonLabel: string
	icon: JSX.Element
	children?: ReactNode
}

export const ListItem = ({ isActive, path, icon, buttonLabel, children }: Props) => {
	const { route } = useRouter()
	const { colors, spacing, radius } = useMantineTheme()

	return (
		<div style={{ borderRadius: radius.sm, background: isActive ? colors.teal[1] : "transparent" }}>
			<Link href={path} passHref>
				<Button
					variant="subtle"
					asLink
					fullWidth
					leftIcon={icon}
					styles={{
						icon: { height: "100% !important", marginRight: spacing.lg },
						inner: { justifyContent: "flex-start", color: colors.navy[9] }
					}}
				>
					{buttonLabel}
				</Button>
			</Link>
			<Collapse in={path === route}>{children}</Collapse>
		</div>
	)
}
