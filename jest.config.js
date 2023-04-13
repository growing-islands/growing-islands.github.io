module.exports = {
  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    // '^.+\\.(css|sass|scss)$': '<rootDir>/src/test/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js',

    /* User path alias */
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~components/(.*)$': '<rootDir>/src/components/$1',
    '^~styles/(.*)$': '<rootDir>/src/styles/$1',
    '^~images/(.*)$': '<rootDir>/src/images/$1',
    '^~stores/(.*)$': '<rootDir>/src/stores/$1',
    '^~hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^~utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~tests/(.*)$': '<rootDir>/src/__tests__/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
}
