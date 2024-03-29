import React from "react"
import {
	MantineProvider as MantineLibProvider,
	MantineProviderProps
} from "@mantine/core"
import { createInputStyles } from "./styles/createInputStyles"
import { theme } from "./styles/theme"
import { colors } from "./styles/colors"

const DISABLED_BUTTON_STYLES = {
	color: `${colors.gray[5]} !important`,
	backgroundColor: `${colors.gray[0]} !important`
}

export interface Props extends MantineProviderProps {
	children: React.ReactNode
}

export const MantineProvider = ({ children, ...props }: Props) => {
	return (
		<MantineLibProvider
			theme={theme}
			styles={{
				Alert: ({ colors, spacing }) => ({
					light: {
						borderRadius: spacing.lg
					},
					filled: {
						borderRadius: spacing.lg
					},
					outline: {
						borderRadius: spacing.lg
					},
					message: { letterSpacing: ".06rem", color: colors.red[8] }
				}),
				Button: ({ colors }) => ({
					default: {
						color: colors.yellow[0]
					},
					root: {
						fontFamily: "Open Sans, sans-serif",
						letterSpacing: ".1rem"
					},
					leftIcon: {
						height: "33%"
					},
					rightIcon: {
						height: "33%"
					},
					filled: {
						"&:disabled": DISABLED_BUTTON_STYLES
					},
					outline: {
						"borderWidth": 2,
						"&:hover": {
							borderColor: colors.teal[6],
							backgroundColor: colors.teal[6],
							borderOpacity: "1 !important",
							color: colors.yellow[0]
						},
						"&:disabled": DISABLED_BUTTON_STYLES
					},
					subtle: {
						"color": colors.navy[9],
						"&:hover": {
							backgroundColor: colors.teal[1]
						},
						"&:disabled": {
							backgroundColor: "transparent !important"
						}
					}
				}),
				Chips: ({ colors, radius }) => ({
					outline: {
						color: colors.gray[7],
						borderRadius: radius.xs,
						borderColor: colors.gray[7],
						backgroundColor: "transparent"
					},
					filled: {
						"color": colors.gray[7],
						"backgroundColor": colors.teal[1],
						":hover": {
							backgroundColor: colors.teal[2]
						}
					},
					checked: {
						color: `${colors.navy[9]} !important`
					}
				}),
				Textarea: createInputStyles({
					input: {
						height: "10rem"
					}
				}),
				TextInput: createInputStyles(),
				NumberInput: createInputStyles(),
				Select: ({ colors }) => ({
					...createInputStyles({
						hovered: {
							color: colors.navy[9],
							backgroundColor: colors.yellow[1]
						},
						selected: {
							color: colors.navy[9],
							backgroundColor: colors.teal[1]
						},
						dropdown: {
							color: colors.navy[9]
						}
					})
				}),
				DatePicker: ({ colors, other }) => ({
					...createInputStyles({
						input: {
							"backgroundColor": colors.yellow[1],
							"::placeholder": {
								color: `${colors.gray[1]} !important`
							},
							"&:disabled": {
								"::placeholder": {
									color: `${colors.gray[1]} !important`
								},
								"backgroundColor": colors.yellow[1],
								"borderColor": colors.gray[1]
							}
						},
						day: {
							"color": colors.navy[9],
							"&:hover": {
								backgroundColor: colors.yellow[1]
							}
						},
						weekend: {
							color: `${colors.navy[9]} !important`
						},
						selected: { color: `${other.colors.white} !important` }
					})
				}),
				DateRangePicker: ({ colors, other }) => ({
					...createInputStyles({
						input: {
							"backgroundColor": colors.yellow[1],
							"::placeholder": {
								color: `${colors.gray[1]} !important`
							},
							"&:disabled": {
								"::placeholder": {
									color: `${colors.gray[1]} !important`
								},
								"backgroundColor": colors.yellow[1],
								"borderColor": colors.gray[1]
							}
						},
						inRange: {
							backgroundColor: `${colors.teal[1]} !important`
						},
						firstInRange: {
							backgroundColor: `${colors.teal[6]} !important`,
							borderRadius: ".2rem !important"
						},
						lastInRange: {
							backgroundColor: `${colors.teal[6]} !important`,
							borderRadius: ".2rem !important"
						},
						day: {
							"color": colors.navy[9],
							"&:hover": {
								backgroundColor: colors.yellow[1]
							}
						},
						weekend: {
							color: `${colors.navy[9]} !important`
						},
						selected: { color: `${other.colors.white} !important` }
					})
				}),
				Checkbox: ({ colors }) => ({
					input: {
						"backgroundColor": colors.yellow[1],
						"borderColor": colors.gray[1],
						"&:disabled": {
							backgroundColor: colors.yellow[0],
							borderColor: colors.gray[1]
						}
					}
				}),
				RadioGroup: ({ colors }) => ({
					label: {
						color: colors.navy[9],
						fontWeight: 600
					},
					radioWrapper: {
						label: {
							fontWeight: 400
						}
					}
				}),
				Stepper: ({ colors }) => ({
					steps: {
						alignItems: "flex-start"
					},
					step: {
						position: "relative",
						margin: 0,
						width: "42px",
						top: "50%",
						flexDirection: "column",
						alignItems: "center"
					},
					stepIcon: {
						color: colors.navy[9],
						backgroundColor: colors.yellow[2]
					},
					stepBody: {
						marginTop: ".4rem",
						marginLeft: 0,
						lineHeight: "150%",
						letterSpacing: ".03rem"
					},
					stepLabel: {
						margin: 0,
						color: colors.navy[9],
						fontWeight: "600",
						textAlign: "center"
					},
					stepDescription: {
						margin: 0,
						marginTop: ".5rem",
						textAlign: "center"
					},
					separator: {
						backgroundColor: colors.yellow[2],
						height: "6px",
						margin: 0,
						marginTop: "18px"
					},
					stepProgress: {}
				}),
				Tooltip: ({ colors, other }) => ({
					body: {
						backgroundColor: other.colors.white,
						color: colors.gray[7],
						border: `${colors.gray[1]} solid 1px`
					}
				}),
				TimeInput: ({}) => ({
					...createInputStyles({
						icon: { padding: ".5rem" }
					})
				}),
				Pagination: ({ colors }) => ({
					item: {
						background: "transparent",
						color: colors.navy[9],
						fontFamily: "Open Sans, sans-serif",
						borderColor: colors.gray[1],
						borderWidth: 2
					}
				})
			}}
			{...props}
		>
			{children}
		</MantineLibProvider>
	)
}
