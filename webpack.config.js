const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: resolve(__dirname, 'client', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
    },
    resolve: {
        extensions: ['*', '.js', '.json']
    },
    plugins: [
    ]
}