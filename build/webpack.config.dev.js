const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:[
    'react-hot-loader/patch',
    'babel-polyfill',
    './src/App.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    chunkFilename: '[name].[hash:5].js',
    filename: '[name].bundle.js',
  },
  devtool: 'eval',
  module: {
    noParse: /\.min\.js/,
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: './dist/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    port: 9091,
    historyApiFallback: true,
    hot: true
  }
};