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
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: true,
  verbose: true
}
