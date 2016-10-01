var webpack = require('webpack');


var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');



 module.exports = {
 	 plugins: [commonsPlugin, new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
            },
            output: {
                comments: true,
            },
        })],

     entry: {'app':'./src/js/app.js','app_bak':'./src/js/app_bak.js'},
     output: {
         path: './bin',
         filename: '[name].js'
     },
     resolve: {
     	modulesDirectories:['src/js/','src/components/'],
        extensions: ['', '.js', '.jsx'],
        alias: {
            cats : 'cats/cats.js',
            jquery : 'jquery/jquery.js'
        }

    }
 };
