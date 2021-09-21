const path = require('path')
const baseConfig = require('./base.config')

const config = baseConfig({
  output: {
    path: path.join(__dirname, '../dev')
  },
  mode: 'development'
})

config.devServer = {
  static: {
    directory: path.join(__dirname, '../dev')
  },
  compress: true,
  port: 9000
}

module.exports = config
