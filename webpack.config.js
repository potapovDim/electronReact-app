const path = require('path')
module.exports = {
  entry: './run_scripts/main.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: "dist.js"
  },
  devServer: {
    port: 3333,
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
      ,{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
    ]
  }
}