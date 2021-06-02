module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/dotenv-test.js',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  testTimeout: 10000,
};
