// TODO: The "query" parameter needs to be able to infer it's type by what got passed into the function when it was called.

export const setPagerDefaults = <T extends { skip?: string; take?: string }>(
	query: T,
	skipDefault: number,
	takeDefault: number
) => {
	return {
		...query,
		skip: Number(query.skip || skipDefault),
		take: Number(query.take || takeDefault)
	}
}
