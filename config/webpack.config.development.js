const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: { historyApiFallback: true },
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../src')],
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[local]-[hash:base64:5]' } },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css',
    }),
  ],
};
