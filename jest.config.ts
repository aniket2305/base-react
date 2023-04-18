export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/fileMock.ts",
  },
  testEnvironment: "jest-environment-jsdom",
};
