const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironment: path.join(__dirname, './prisma/prisma.test.env.js'),
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '__tests__/utils/'],
  collectCoverageFrom: ['src/app/**/*.ts'],
};
