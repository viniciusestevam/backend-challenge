module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.+(ts)'],
  collectCoverageFrom: ['src/app/**/*.ts', '!**/node_modules/**'],
};
