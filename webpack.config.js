const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  name: 'Sofia In Sound',
  output: {
    // path: path.resolve(__dirname, 'assets/js'),
    filename: 'main.js',
  },
  module: {
     rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
           loader: "babel-loader",
           options: {
            presets: ["@babel/preset-env"],
          }
        }
       },
       {
        test: /\.(scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // prependData:  `@import "@/styles/global-styles.scss";`
            }
          }
        ]
       },
       {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      },
      {
       test: /\.(jpg|png)$/,
       exclude: /node_modules/,
       use: [
         'file-loader',
       ]
     }
     ]
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   },
  //   extensions: ['*', '.js', '.vue', '.json']
  // },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sofia In Sound',
      favicon: './src/data/img/favicon-32x32.png'
    })
    // new CopyWebpackPlugin([{
    //   from: 'src/data/img'
    // }])
  ],
  
}