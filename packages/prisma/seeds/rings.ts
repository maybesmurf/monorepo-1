import { getRandomValueFromArray } from "../utils/randomFromArray"

export const generateRings = (trialDayIds: string[]) => {
	const rings = [...Array(4)].map(() => ({
		trialDayId: getRandomValueFromArray(trialDayIds)
	}))

	return rings
}
