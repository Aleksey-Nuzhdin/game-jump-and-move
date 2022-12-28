const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js'
  },
  devServer: {
    client:{
      overlay: true,
    },
    open: false,
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    host: '0.0.0.0',
    port: 2020,
    liveReload: true,
  },  
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
};