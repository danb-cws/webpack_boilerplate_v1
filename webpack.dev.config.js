var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss');

module.exports = {
    context: __dirname,
    entry:[
        'webpack-hot-middleware/client',
        './src/js/client.js'
    ],
    output: {
        path: '/',// must have some val here
        publicPath: '/js/',
        filename: '[name].js'
    },
    devtool: 'eval',//eval breaks sass sourcemap?
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({ browsers: ['last 2 versions'] }), precss];
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    }
};
