module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '__tests__/utils/'],
  collectCoverageFrom: ['src/app/**/*.ts'],
};
