var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge')
// const baseWebpackConfig = require('../build/webpack.base.conf')

module.exports = merge({
    entry: {
        main: './src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'entry.js',
        library: 'sign',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
      // '', 
      extensions: [ '*', '.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'vue-html'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
})