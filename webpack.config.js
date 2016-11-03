// webpack.config.js
var path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },{
        test : /.js$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : [
            'es2015'
          ]
        }
      }
    ]
  }
}
