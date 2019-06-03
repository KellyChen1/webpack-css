const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
//   devtool: "source-map", //原始源代码
  plugins: [
      new CleanWebpackPlugin(), 
      new UglifyJSPlugin({
        //   parallel:true,
      })
    ]
});
