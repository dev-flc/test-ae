const merge                   = require('webpack-merge' );
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin' );
const common                  = require('./webpack.common.js' );
const path                    = require('path' );
const MiniCssExtractPlugin    = require('mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin' );
const webpack                 = require( 'webpack');

const date = new Date();

const time = date.getTime();

module.exports = merge( common(), {

    mode    : 'production',

    devtool : false,

    stats   : "minimal",

    output : {
        publicPath    : '/',
        path          : path.resolve( __dirname, 'public' ),
        filename      : `js/${process.env.VERSION_APP}.[name].${time}.[contenthash].min.js`,
        chunkFilename : `js/${process.env.VERSION_APP}.[name].[id].${time}.[contenthash].[chunkhash].min.js`,
    },


    module : {
        rules : [
            {
                resolve : {extensions: [".scss", ".css"],},
                test    : /\.(sa|sc|c)ss$/,
                use     : [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],

            }
        ]

    },

    optimization : {

        runtimeChunk : 'single',

        splitChunks : {
            cacheGroups : {
                vendor : {
                    test   : /[\\/]node_modules[\\/]/,
                    name   : `common.${time}`,
                    maxSize: 30000,
                    chunks: 'all'
                },
                common: {
                    name: `chunk-common.${time}`,
                    minChunks: 2,
                    priority: -30,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        },

        minimizer : [
            new OptimizeCSSAssetsPlugin( {} ),

            new UglifyJsPlugin( {
                test      : /\.js(\?.*)?$/i,
                sourceMap : false,
                cache     : true,
                parallel  : 4
            } )
        ],
    },

    plugins : [

        new webpack.HashedModuleIdsPlugin(),

        new MiniCssExtractPlugin( {
            filename : `css/${process.env.VERSION_APP}.[name].${time}.[contenthash].min.css`
        } )
    ]
} );
