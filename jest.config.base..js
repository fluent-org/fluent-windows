module.exports = {
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '.(ts|tsx)': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['node_modules', 'build'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', 'build'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  coveragePathIgnorePatterns: ['node_modules', 'build'],
  // TODO The official version then enable the configuration
  // coverageThreshold: {
  //   global: {
  //     branches: 99,
  //     functions: 99,
  //     lines: 99,
  //     statements: 99
  //   }
  // },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: true,
  verbose: true
}
