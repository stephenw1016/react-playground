var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
    app: APP_DIR + '/index.jsx',
    vendor: APP_DIR + '/vendor.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?/, include: APP_DIR, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './vendor.bundle.js')
  ]
};

module.exports = config;
