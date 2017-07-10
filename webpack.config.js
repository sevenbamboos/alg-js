var webpack = require('webpack'),
    path = require('path');
 
var srcPath  = path.join(__dirname, 'app/scripts'),
    distPath = path.join(__dirname, 'app/dist/js');
 
module.exports = {
    watch: false,
    cache: true,
    devtool: '#cheap-module-eval-source-map',
    context: srcPath,
    entry: {
        app: './main.js',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: ["node_modules"],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};