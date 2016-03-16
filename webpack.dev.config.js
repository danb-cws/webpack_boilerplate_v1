var webpack = require("webpack"),
    path = require("path"),
    //ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require("autoprefixer"),
    precss = require("precss");

module.exports = {
    context: __dirname,
    entry:[
        "webpack-hot-middleware/client",
        "./src/js/client.js"
    ],
    output: {
        path: path.join(__dirname, "/dist/js"),
        publicPath: "/dist/js/",//needs to be at root? or delete webpack real file
        filename: "bundle.js"
    },
    devtool: "eval",//eval breaks sass sourcemap?
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({ browsers: ["last 2 versions"] }), precss];
    },
    plugins: [
        //new ExtractTextPlugin("../css/[name].css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        //can now require('file') instead of require('file.ext')
        extensions: ['', '.js', '.json']
    }
};