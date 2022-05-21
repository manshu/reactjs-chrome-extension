const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('src/popup/popup.tsx')
    },
    module: {
        rules: [{
            use: 'ts-loader',
            test: /\.tsx?$/,
            exclude: /node_modules/,
        }]
    },
    "plugins": [
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/manifest.json'),
                to: path.resolve('dist')
            }]
        }),
        new HtmlPlugin({
            title: 'React Extension',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
}