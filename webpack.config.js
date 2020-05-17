const path = require('path');

module.exports = [
  {
    entry: './src/jquery-disable-with.js',
    externals: { jquery: 'jQuery' },
    output: {
      filename: 'jquery-disable-with.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'jquery-disable-with',
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  },
  {
    entry: './src/jquery-disable-with.js',
    output: {
      filename: 'jquery-disable-with-bundle.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'jquery-disable-with',
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  }
];