const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin= require("clean-webpack-plugin")
const webpack = require("webpack")
module.exports = {
  mode:"production",
  entry: {
    app: "./src/index.js",
    // print:"./src/print.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    // publicPath:"/"  //加了这条，打包后，路径有问题，引用不到文件
  },
  devtool:"inline-source-map", //源码匹配
  
  //webpack-dev-server: keep bundle file in memory
  devServer: {    
    contentBase: '/dist',
    hot: true,
    compress:true,
    port:3000,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)/,
        use: ["file-loader"]
      },
      {
          test:/\.(woff|woff2|eot|ttf|otf)$/,
          use:["file-loader"]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title:"output"
    })
  ]
};
