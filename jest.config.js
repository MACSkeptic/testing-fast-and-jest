const { createJestConfig } = require("@craco/craco");

const jestConfig = createJestConfig({
  jest: {
    configure: {
      globals: { CONFIG: true },
      "runner": "jest-electron/runner",
      "testEnvironment": "jest-electron/environment",
      "transformIgnorePatterns": [
        ".*FAST.*"
      ]
    }
  }
});

module.exports = jestConfig;
