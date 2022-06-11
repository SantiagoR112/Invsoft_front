const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'demo/index': path.resolve(__dirname, './demo/index.demo.js'),
    'spec/index': path.resolve(__dirname, './spec/index.spec.js')
  },
  output: {
    libraryTarget: 'var',
    library: 'zeroLang',
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: '[name].js'
  },
  alias: {},
  resolveLoader: {},
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /locale/,
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  plugins: [],
  externals: {},
  devtool: 'source-map'
};

