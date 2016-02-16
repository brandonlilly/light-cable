var path = require('path');
var webpack = require('webpack');

var config = {
  devtool : 'eval-source-map',

  entry: [
    './app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: '../app/assets/javascripts/generated/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    root: [ path.join(__dirname, 'app/') ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
    ]
  },
};

module.exports = config;
