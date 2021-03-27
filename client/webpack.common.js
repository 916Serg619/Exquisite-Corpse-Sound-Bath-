const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:4000'
    })
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/App/index'),
  
  },

};