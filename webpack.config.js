const path = require('path')

module.exports = {
  entry: [
    './src/client/app.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules']    
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src')
      }
    ]
  }
}