
module.exports = {
    mode: 'production',
    optimization: {
        minimize: true
    },
    entry: {
        'dist/index': './index.js',
        'demo/index': './index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        library: 'emojiConvert',
        libraryTarget: 'umd'
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                    plugins: ["add-module-exports"]
                }
            }
        ]
    }
}

