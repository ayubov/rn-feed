module.exports = {
  preset: 'jest-expo',
  setupFiles: ['./tests/jest.mock.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['/node_modules/(?!react-native|expo|@expo|@react-navigation)/'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testTimeout: 30000,
};
