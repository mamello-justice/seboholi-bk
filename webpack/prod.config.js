const path = require('path')
const baseConfig = require('./base.config')

const config = baseConfig({
  output: {
    path: path.join(__dirname, '../build')
  },
  mode: 'production'
})

module.exports = config
