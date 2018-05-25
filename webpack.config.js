const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: { historyApiFallback: true },
  devtool: devMode ? 'eval' : 'source-maps',
  entry: './src/app.js',
  output: devMode ?
    {
      filename: 'app.js',
      publicPath: '/',
    }
    :
    {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/',
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'app.css' : 'app.[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
