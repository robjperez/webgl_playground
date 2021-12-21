const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

const {
  NODE_ENV = 'production',
} = process.env;
module.exports = {
  entry: './src/web/index.ts',
  mode: NODE_ENV,
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'src/web/index.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
}
