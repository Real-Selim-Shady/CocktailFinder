
// eslint-disable-next-line no-undef
module.exports = {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.[jt]sx?$": "ts-jest",
	},
	transformIgnorePatterns: [
		"/node_modules/(?!axios).+\\.js$"
	],
	moduleNameWrapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest',
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};