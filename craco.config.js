module.exports = () => ({
  jest: {
    configure: process.env.ELECTRON ? {
      "runner": "jest-electron/runner",
      "testEnvironment": "jest-electron/environment",
    } : {}
  }
});
