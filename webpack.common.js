const path                       = require( 'path' );
const HtmlWebpackPlugin          = require( 'html-webpack-plugin' );
const ScriptExtHtmlWebpackPlugin = require( "script-ext-html-webpack-plugin");
const { CleanWebpackPlugin }     = require( 'clean-webpack-plugin' );
const WebpackBar                 = require( 'webpackbar' );

const date = new Date();

const time = date.getTime();

module.exports = () => {

    return {

        entry : {
            suscribe :  [
                'babel-polyfill',
                path.resolve( __dirname, './src/index.js' ),
                path.resolve( __dirname, './src/assets/styles/index.scss' )
            ]
        },

        output : {
            path          : path.resolve( __dirname, 'public' ),
            filename      : `js/[name].${process.env.VERSION_APP}.${time}.[contenthash].js`,
            chunkFilename : `js/[id].${process.env.VERSION_APP}.${time}.[chunkhash].js`,
            publicPath    : '/'
        },

        resolve : { extensions : [ '.jsx', '.js' ] },

        module : {
            rules : [

                {
                    test    : /\.(js|jsx)$/,
                    include : [ path.resolve(__dirname, "src") ],
                    exclude : [ path.resolve(__dirname, "node_modules") ],
                    use  : {
                        loader : 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react' ],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    },
                },

                {
                    test : /\.(ttf|eot|otf)(\?[\s\S]+)?$/,
                    use  : {
                        loader  : 'url-loader',
                        options : {
                            limit    : 10000,
                            fallback : 'file-loader',
                            name     : `fonts/${process.env.VERSION_APP}.[contenthash].[ext]`,
                        }
                    }
                },

                {
                    test : /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
                    use  : {
                        loader  : 'url-loader',
                        options : {
                            limit    : 10000,
                            fallback : 'file-loader',
                            name     : `images/${process.env.VERSION_APP}.${time}.[contenthash].[ext]`,
                        }
                    }
                }
            ]
        },

        plugins : [

            new CleanWebpackPlugin( ),

            new WebpackBar( { color : '#ff4081' } ),

            new HtmlWebpackPlugin( {
                title    : 'TEST AEROMEXICO',
                filename : 'index.html',
                template : './src/index.ejs',
                cache    : true,
                version  : process.env.VERSION_APP
            } ),

            new ScriptExtHtmlWebpackPlugin( {
                defaultAttribute  : 'async'
            } ),
        ]

    }
}
