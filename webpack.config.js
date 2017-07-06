var webpack = require('webpack'),
    path = require('path');
 
var srcPath  = path.join(__dirname, 'app/scripts'),
    distPath = path.join(__dirname, 'app/dist/js');
 
module.exports = {
    watch: false,
    cache: true,
    devtool: '#eval-source-map',
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
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};