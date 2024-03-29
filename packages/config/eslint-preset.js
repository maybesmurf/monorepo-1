module.exports = {
	extends: ["next", "prettier"],
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"]
		}
	},
	rules: {
		"no-unused-vars": 1,
		"@next/next/no-html-link-for-pages": "off"
	},
	ignorePatterns: [
		"**/*.js",
		"node_modules",
		".turbo",
		"dist",
		"build",
		"coverage"
	]
}
