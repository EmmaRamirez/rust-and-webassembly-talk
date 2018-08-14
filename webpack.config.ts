import * as webpack from 'webpack';

module.exports = {
    loaders: [
        {
            test: /\.wasm$/,
            loaders: ['wasm-loader']
        }
    ]
}