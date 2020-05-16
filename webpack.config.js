const path = require('path');

module.exports = {
  entry: {
    'AiurCore.js': [
      path.resolve(__dirname, 'src/jquery-disable-with.js'),
    ]
  },
  output: {
    filename: 'jquery-disable-with.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};