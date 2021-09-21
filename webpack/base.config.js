const path = require('path')
const glob = require('glob')
const { transform } = require('lodash')

const alias = transform(
  glob.sync('../packages/*'),
  (result, dir) => {
    result[`@seboholi/${path.basename(dir)}`] = path.resolve(__dirname, dir)
  },
  {}
)

const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = ({ mode, output }) => ({
  mode,
  entry: { index: path.resolve(__dirname, '../src/index.tsx') },
  output: {
    filename: '[name].js',
    ...output
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Seboholi',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      template: path.resolve(__dirname, '../public/index.html'),
      meta: {
        viewport: 'width=device-width, initial-scale=1',
        description: "Online portfolio for Seboholi's family"
      }
    })
  ],
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  resolve: {
    alias,
    fallback: {
      fs: false,
      path: false
    },
    modules: ['node_modules', '.'],
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
})

module.exports = baseConfig
