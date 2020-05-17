const path = require('path');

module.exports = [
  {
    entry: './src/jquery-disable-with.js',
    externals: { jquery: 'jQuery' },
    mode: "production",
    output: {
      filename: 'jquery-disable-with.min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  }
];