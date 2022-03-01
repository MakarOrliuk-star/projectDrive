// module.exports = {
//     // devServer: {
//     //     port: 8080,
//     //     //contentBase: path.resolve(__dirname, 'static'),
//     //     proxy: {
//     //         '/api': {
//     //             target: process.env.APP_API_URL,
//     //             changeOrigin: true,
//     //             secure: false,
//     //         },
//     //         '/storage': {
//     //             target: process.env.APP_API_URL,
//     //             changeOrigin: true,
//     //             secure: false,
//     //         },
//     //     },
//     // },
//     module: {
//         rules: [
//             {
//                 test: /\.pug$/,
//                 loader: 'pug-plain-loader'
//             },
//             // ... другие правила опущены
//
//             // это правило будет применяться к обычным файлам `.scss`
//             // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },
//             {
//                 test: /\.sass$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     {
//                         loader: 'sass-loader',
//                         options: {
//                             indentedSyntax: true,
//                             // sass-loader >= 8
//                             sassOptions: {
//                                 indentedSyntax: true
//                             }
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(jpg|jpeg|gif|png)$/,
//                 use: {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[name].[ext]',
//                         publicPath: 'images',
//                         outputPath: 'images',
//                     }
//                 }
//             },
//
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader?cacheDirectory=true',
//                 }
//             },
//
//         ]
//     },
//     // плагин опущен
// }
