module.exports = {
	...require("@doggo/config/eslint/common"),
	ignorePatterns: [
		...require("@doggo/config/eslint/common").ignorePatterns,
		"/nextjs",
		"/node"
	]
}
