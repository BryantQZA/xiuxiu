const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',
  // entry: ['./src/search', './src/app'],
  // entry: {
  //   app: './src/app.js',
  //   search: './src/search.js'
  // },

  output: {
    path: __dirname + '/build',
    // filename: 'app.bundle.js'
    // filename: '[name].bundle.js'
    // filename: '[name].[hash].js'
    // filename: 'app_[hash].js'
    filename: 'app[chunkhash].js'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'React',
      template: 'my-index.ejs'
    }),
    new ExtractTextPlugin({
      // filename:'app_[hash].css',
      filename:'app.css',
      disable: false,
      allChunks: true
    })
  ],

  devServer: {
    contentBase: './build',
    host: 'localhost',
    historyApiFallback: false,
    port: 8000,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        pathRewrite: {"^/api" : ""}
      }
    }
  },

  externals: {
    jquery: 'window.jQuery',
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter'
  }
}
