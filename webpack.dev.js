const merge  = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const path   = require( 'path' );

module.exports = merge( common(), {

    mode         : 'development',

    devtool      : 'source-map',

    context      : path.resolve( __dirname , '' ),

    watchOptions : { ignored : /node_modules/ },

    devServer    : {
        historyApiFallback : true,
        host               : '127.0.0.1',
        port               : 8087,
        open               : true,
        inline             : true,
        overlay            : true,
        stats              : 'minimal'
    },

    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/,
                use  : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
} );
