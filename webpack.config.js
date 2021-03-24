const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css'
      }),
    ],
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/",
      filename: 'bundle.js'
    },
    devServer: {
      watchContentBase: true,
      contentBase: 'dist',
      open: true,
      clientLogLevel: 'silent',
      port: 3000,
      historyApiFallback: true,
      inline: true,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": "defaults" 
                }],
                '@babel/preset-react'
              ]
            }
          },]
        },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1 
                }
              },
              'postcss-loader'
            ]
          }
      ]
    }
  }