const path = require('path')
const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  rootDir: path.resolve(__dirname, './'),
  projects: ['<rootDir>/packages/*/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage/'
}
