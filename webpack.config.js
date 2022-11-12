const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      'stream': require.resolve('stream-browserify'),
      'buffer': require.resolve('buffer')
    },
    alias: {
      '@models': path.resolve(__dirname, './src/models'),
      '@typings': path.resolve(__dirname, './src/typings'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new Dotenv({
      path: './.env.local', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
    })
  ]
}

if (isProduction) {
  webpackConfig.mode = 'production'
} else {
  webpackConfig.devtool = 'inline-source-map'
  webpackConfig.mode = 'development'
}

module.exports = webpackConfig
