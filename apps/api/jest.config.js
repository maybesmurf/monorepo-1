const buildModuleNameMapper =
	require("@doggo/config/jest/buildModuleNameMapper").buildModuleNameMapper

const SRC_PATH = "./src"
const TS_CONFIG_PATH = require("./tsconfig.json")

module.exports = {
	...require("@doggo/config/jest/common"),
	modulePathIgnorePatterns: ["<rootDir>/dist"],
	moduleNameMapper: buildModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
	setupFiles: ["<rootDir>/.jest/setEnvVars.js"]
}
