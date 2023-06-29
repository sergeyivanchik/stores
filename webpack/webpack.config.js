const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const babel = require('./loaders/babel.loader');
const ts = require('./loaders/ts.loader');
const style = require('./loaders/style.loader');
const font = require('./loaders/font.loader');
const svg = require('./loaders/svg.loader');

const pkg = require('../package.json');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', pkg.path.output),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  module: {
    rules: [ts(), babel(), style(), font(), svg()],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new Dotenv(),
  ],
  devServer: {
    hot: isDev,
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
};
