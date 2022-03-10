import { useState } from "react"
import { Card, Group, Image, SVG } from "@Components/shared"
import { format } from "date-fns"
import { Text, Title, useMantineTheme } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"

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
	const { colors, spacing, radius, shadows, fontSizes } = useMantineTheme()
	const { ref, width } = useElementSize()

	const CARD_STYLES = {
		paddingTop: 0,
		cursor: "pointer",
		boxShadow: isHovered ? shadows.sm : shadows.xs,
		transition: ".15s"
	}

	return (
		<Card
			ref={ref}
			onClick={() => onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			radius="md"
			padding="xs"
			shadow="sm"
			style={CARD_STYLES}
		>
			<div
				style={{
					position: "absolute",
					top: "10px",
					right: "10px",
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
			<Card.Section>
				<Image src={imageUrl} alt={imageAlt} width="100%" height="200px" />
			</Card.Section>
			<Group direction="column">
				<Group style={{ width: "100%", margin: 0, paddingTop: spacing.md }} direction="row" position="apart">
					<Group direction="row" spacing="xs">
						<SVG.Calendar style={{ position: "relative", top: "-2px" }} width={fontSizes.md} stroke={colors.gray[3]} />
						<Text style={{ fontSize: fontSizes.xs, color: colors.gray[7] }}>
							{format(dateRange.start, "MMM")} {format(dateRange.start, "d")} - {format(dateRange.end, "MMM")}{" "}
							{format(dateRange.end, "d")}
						</Text>
					</Group>
					<SVG.Heart
						width="28px"
						stroke={favorite ? colors.red[4] : colors.teal[6]}
						fill={favorite ? colors.red[4] : "transparent"}
					/>
				</Group>

				<Title
					order={3}
					style={{
						margin: 0,
						minHeight: "76px",
						fontSize: fontSizes.lg,
						color: colors.navy[9],
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "3",
						overflow: "hidden"
					}}
				>
					{eventTitle}
				</Title>
				<Group position="apart" spacing="xs" style={{ width: "100%", flexWrap: "nowrap" }}>
					<Group position="apart" spacing="xs" style={{ flexWrap: "nowrap" }}>
						<SVG.Marker width={fontSizes.sm} stroke={colors.gray[3]} />
						<Text style={{ color: colors.gray[7], fontSize: fontSizes.xs }}>{location}</Text>
					</Group>
					<Group spacing="xs" style={{ flexWrap: "nowrap" }}>
						<SVG.Checkmark width={fontSizes.sm} stroke={colors.yellow[8]} />
						{width > 250 && (
							<Text style={{ color: colors.yellow[8] }}>{status?.charAt(0).toUpperCase() + status?.slice(1)}</Text>
						)}
					</Group>
				</Group>
			</Group>
		</Card>
	)
}
