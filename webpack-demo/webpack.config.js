/*
 * @Author: TerryMin
 * @Date: 2021-11-16 16:25:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-11-16 18:15:17
 * @Description: file not
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将js中的样式资源进行插入，添加到head中生效
          'style-loader',
          // 将css文件编程CommonJs模块加载到js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./public/index.html",
      template: resolve(__dirname, "./public/index.html"),
    }),
  ],
  mode: 'development'
}


