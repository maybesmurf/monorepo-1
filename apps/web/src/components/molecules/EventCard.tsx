import { useState } from "react"
import { Card, Flexbox, Image, SVG } from "@Components/shared"
import { format } from "date-fns"
import { Text, Title, useMantineTheme } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"

interface Props {
	userRole: "host" | "judge" | "dog owner"
	favorite?: boolean
	dateRange: {
		start: Date
		end: Date
	}
	eventTitle: string
	location?: string
	status: "registered" | "unregistered"
	imageUrl: string
	imageAlt: string
	onClick?: Function
}

const MOBILE_STYLES = {
	display: "flex",
	flexDirection: "row",
	paddingBottom: 0
}

export const EventCard = ({
	userRole,
	favorite,
	dateRange,
	eventTitle,
	location,
	status,
	imageUrl,
	imageAlt,
	onClick
}: Props) => {
	const [isHovered, setIsHovered] = useState(false)
	const { width } = useViewportSize()
	const { colors, spacing, radius, shadows, fontSizes } = useMantineTheme()
	const isMobile = width < 450

	const CARD_STYLES = {
		paddingTop: 0,
		cursor: "pointer",
		boxShadow: isHovered ? shadows.sm : shadows.xs,
		transition: ".15s"
	}

	return (
		<Card
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			radius="md"
			padding="xs"
			shadow="sm"
			style={isMobile ? { ...CARD_STYLES, ...MOBILE_STYLES } : CARD_STYLES}
		>
			<div
				style={{
					position: "absolute",
					top: isMobile ? "initial" : "10px",
					bottom: isMobile ? "10px" : "initial",
					right: isMobile ? "initial" : "10px",
					left: isMobile ? "10px" : "initial",
					zIndex: "1",
					padding: `0 ${spacing.lg}px`,
					borderRadius: radius.lg,
					backgroundColor: colors.teal[1],
					color: colors.navy[9],
					fontWeight: 600
				}}
			>
				<Text>{userRole?.toUpperCase()}</Text>
			</div>
			<Card.Section style={{ width: isMobile ? "45%" : "initial" }}>
				<Image src={imageUrl} alt={imageAlt} width="100%" height="200px" />
			</Card.Section>
			<Flexbox
				style={{ paddingLeft: isMobile ? spacing.lg : spacing.xs, paddingRight: isMobile ? spacing.lg : spacing.xs }}
				direction="column"
				alignItems="flex-start"
				justifyContent="space-around"
			>
				<Flexbox
					style={{ width: "100%", margin: 0, paddingTop: spacing.md }}
					padding={0}
					alignItems="center"
					direction="row"
					justifyContent="space-between"
				>
					<Flexbox
						style={{ marginLeft: 0, paddingLeft: 0 }}
						alignItems="center"
						direction="row"
						justifyContent="flex-start"
					>
						<SVG.Calendar style={{ position: "relative", top: "-2px" }} width={fontSizes.md} stroke={colors.gray[3]} />
						<Text style={{ paddingLeft: spacing.xs / 2, fontSize: fontSizes.xs, color: colors.gray[7] }}>
							{format(dateRange.start, "MMM")} {format(dateRange.start, "d")} - {format(dateRange.end, "MMM")}{" "}
							{format(dateRange.end, "d")}
						</Text>
					</Flexbox>
					<SVG.Heart
						width="28px"
						stroke={favorite ? colors.red[4] : colors.teal[6]}
						fill={favorite ? colors.red[4] : "transparent"}
					/>
				</Flexbox>
				<Title order={3} style={{ margin: `${spacing.sm}px 0`, fontSize: fontSizes.lg, color: colors.navy[9] }}>
					{eventTitle}
				</Title>
				<Flexbox style={{ margin: 0, padding: 0 }} alignItems="center" direction="row" justifyContent="space-between">
					<Flexbox
						style={{ marginLeft: 0, paddingLeft: 0 }}
						alignItems="center"
						direction="row"
						justifyContent="space-between"
					>
						<SVG.Marker width={fontSizes.sm} stroke={colors.gray[3]} />
						<Text style={{ paddingLeft: spacing.xs / 2, color: colors.gray[7], fontSize: fontSizes.xs }}>
							{location}
						</Text>
					</Flexbox>
					<Flexbox
						style={{ marginRight: 0, paddingRight: 0 }}
						alignItems="center"
						direction="row"
						justifyContent="space-between"
					>
						<SVG.Checkmark width={fontSizes.sm} stroke={colors.yellow[8]} />
						<Text style={{ marginLeft: spacing.xs / 2, color: colors.yellow[8] }}>
							{status?.charAt(0).toUpperCase() + status?.slice(1)}
						</Text>
					</Flexbox>
				</Flexbox>
			</Flexbox>
		</Card>
	)
}
