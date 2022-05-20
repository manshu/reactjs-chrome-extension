const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    module: {
        rules: [{
            use: 'ts-loader',
            test: /\.tsx?$/,
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    }
}