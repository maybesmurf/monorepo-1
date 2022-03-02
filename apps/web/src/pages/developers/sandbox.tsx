import { EventCard } from "@Components/molecules"

const Sandbox = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column"
			}}
		>
			<EventCard
				userRole="host"
				favorite
				dateRange={{
					start: new Date(),
					end: new Date()
				}}
				eventTitle="Some Super Dope Dog Show"
				location="Some Park Somewhere"
				status="registered"
				imageUrl="/jump-pup.png"
				imageAlt="Look a dog"
			/>
		</div>
	)
}

export default Sandbox
