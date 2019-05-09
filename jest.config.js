module.exports = {
  testURL: "http://localhost",
  testRegex: "test/jest/.*.spec.(ts|js)",
  setupTestFrameworkScriptFile: "jest-chain",
  preset: "jest-puppeteer",
  roots: ["./"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
