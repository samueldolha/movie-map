'use strict'

module.exports = { 
    entry: './src/root.js',
    output: { filename: 'bundle.js', path: __dirname },
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.css$/, use: "css-loader" }
        ]
    }
}
