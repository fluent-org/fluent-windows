const path = require('path')

const base = require('../../jest.config.base.')
const pack = require('./package.json')

module.exports = {
  ...base,
  rootDir: path.resolve(__dirname, './'),
  name: pack.name,
  displayName: pack.name
}
