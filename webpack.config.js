/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 */

var path = require('path');

module.exports = {
  entry: "./src/plugin.js",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           "style-loader",
           "css-loader"
         ]
       }
     ]
   }
};