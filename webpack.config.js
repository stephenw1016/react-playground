var webpack = require('webpack');
var path = require('path');

const APP_PATH = 'src/client/app';
const APP_DIR = path.resolve(__dirname, APP_PATH);
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var config = {
  entry: {
    app: APP_DIR + '/index.jsx',
    vendor: APP_DIR + '/vendor.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  resolve: {
    root: [path.resolve('./' + APP_PATH)],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.jsx?/, include: APP_DIR, loader: 'babel'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './vendor.bundle.js')
  ]
};

module.exports = config;
