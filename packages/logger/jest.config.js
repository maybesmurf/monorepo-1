const buildModuleNameMapper =
	require("@doggo/config/jest/buildModuleNameMapper").buildModuleNameMapper

const srcPath = "./src"
const tsConfig = require("./tsconfig.json")

module.exports = {
	...require("@doggo/config/jest/common"),
	moduleNameMapper: buildModuleNameMapper(srcPath, tsConfig)
}
