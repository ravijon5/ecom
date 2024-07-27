module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["js", "jsx", "mjs"],
  transform: {
    "\\.js$": "babel-jest",
    "\\.jsx$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec|mjs))\\.(jsx?|mjs)$",
};
