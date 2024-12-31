const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      index: './src/js/index.js',
      rules: './src/js/rules.js',
      puzzle: './src/js/puzzle.js',
      final: './src/js/final.js',
    },
    output: {
      filename: isProduction ? 'js/[name].[contenthash].bundle.js' : 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/', // Забезпечує правильні шляхи у продакшені
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'styles/[name].[contenthash].css' : 'styles/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: './src/puzzle.html',
        filename: 'puzzle.html',
        chunks: ['puzzle'],
      }),
      new HtmlWebpackPlugin({
        template: './src/registration.html',
        filename: 'registration.html',
        chunks: ['registration'],
      }),
      new HtmlWebpackPlugin({
        template: './src/final.html',
        filename: 'final.html',
        chunks: ['final'],
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      open: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'https://api.zymovershnyk.fun',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/api': '' },
        },
      },
    },
    mode: isProduction ? 'production' : 'development',
  };
};
