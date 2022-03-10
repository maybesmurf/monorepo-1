const nextJest = require("next/jest")
const { buildModuleNameMapper } = require("@doggo/config/jest/buildModuleNameMapper")

const createJestConfig = nextJest({
	dir: "./"
})

const srcPath = "./src"
const tsConfig = require("./tsconfig.json")

const customJestConfig = {
	testEnvironment: "jest-environment-jsdom",
	clearMocks: true,
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: buildModuleNameMapper(srcPath, tsConfig),
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}

module.exports = createJestConfig(customJestConfig)
