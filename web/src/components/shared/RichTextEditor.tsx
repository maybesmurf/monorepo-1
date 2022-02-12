import dynamic from "next/dynamic"
import { RichTextEditorProps } from "@mantine/rte"
import { useMantineTheme } from "@mantine/core"

const DynamicallyLoadedRte = dynamic(() => import("@mantine/rte"), {
	// Disables server side rendering
	ssr: false,

	// Render for fallback on server. Can be made to be a loader or other html content
	loading: () => null
})

interface Props extends RichTextEditorProps {
	// initialValue: string
}

export const RichTextEditor = (props: Props) => {
	const { colors, other } = useMantineTheme()

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
			<DynamicallyLoadedRte
				{...props}
				styles={{
					root: {
						"backgroundColor": colors.yellow[1],
						"&:focus": {
							backgroundColor: other.colors.white
						}
					},
					toolbar: {
						backgroundColor: colors.yellow[0]
					}
				}}
			/>
		</div>
	)
}
