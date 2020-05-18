const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const production = process.env.NODE_ENV === 'production' || false;

module.exports = {
    entry: ['./src/jquery-disable-with.js'],
    mode: 'production',
    output: {
        filename: production ? 'jquery-disable-with.min.js' : 'jquery-disable-with.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
        library: 'DisableWith',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: production,
        minimizer: [
          new TerserPlugin({ })
        ]
    }
};
