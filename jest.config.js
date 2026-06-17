const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const isCoverageRun = process.argv.includes("--coverage");

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  maxWorkers: isCoverageRun ? 1 : "50%",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^utils/(.*)$": "<rootDir>/utils/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "\\.module\\.css$",
    "\\.styles\\.ts$",
    "/types/",
  ],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/tests/", "\\.spec\\.ts$"],
};

module.exports = createJestConfig(customJestConfig);
