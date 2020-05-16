const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(
            __dirname,
            'dist'),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        compress: true,
        port: 8050
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            }
        ]
    },

    resolve: { alias: { vue: 'vue/dist/vue.esm.js' } }
};