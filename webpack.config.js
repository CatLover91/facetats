var path = require('path');
var fs = require('fs');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  target: 'node',
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
