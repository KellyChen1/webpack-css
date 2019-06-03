const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js"
    // publicPath:"/"  //加了这条，打包后，路径有问题，引用不到文件
  },
  module: {
    rules: [
    //   {
    //     test: /\.js/,
    //     exclude: /\/node_modules/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: ["@babel/preset-env"]
    //       }
    //     }
    //   },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "production"
    })
  ]
};
