/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 *  - Create Time: 2020-03-15
 */

const path = require('path');
module.exports = {
  entry: './src/plugin.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'plugin.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};

// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     entry: './src/plugin.js',
//     mode: 'development',
//     devtool: 'inline-source-map',
//     output: {
//         publicPath: '',
//         path: path.join(__dirname, 'dist'),
//         filename: 'plugin.min.js',
//     },
//     resolve: {
//         extensions: ['.js'],
//         modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
//         alias: {
//             'markmap-tree': 'markmap/lib/d3-flextree',
//             'markmap-parser': 'markmap/lib/parse.markdown',
//             'markmap-transform': 'markmap/lib/transform.headings',
//             'markmap-mindmap': 'markmap/lib/view.mindmap',
//         },
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: 'plugin.min.css',
//         }),
//     ],
//     // module: {
//     //     rules: [
//     //         {test: /\.css$/, loader: [MiniCssExtractPlugin.loader, 'css-loader']},
//     //         {test: /\.png$/, use: {loader: 'file-loader'}},
//     //         {
//     //             /** babel */
//     //             test: /\.js?$/,
//     //             exclude: /(node_modules|bower_components)/,
//     //             use: {
//     //                 loader: 'babel-loader',
//     //                 options: {
//     //                     presets: ['env', 'es2015'],
//     //                 },
//     //             },
//     //         },
//     //     ],
//     // },
// };
