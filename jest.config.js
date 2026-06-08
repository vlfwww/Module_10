import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset({
  tsconfig: "tsconfig.test.json",
}).transform;

export default {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/tests/"],
  coveragePathIgnorePatterns: ["/node_modules/", "\\.styles\\.ts$", "\\.styles\\.tsx$"],
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
  },
};
