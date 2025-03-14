const path = require('path');

module.exports = {
    entry: {
        'index': './docs/index.ts'

    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: "ts",
                        }
                    }
                ],

                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "workspaces"),
                    path.resolve(__dirname, "theme")
                ]
            },
            {
                enforce: 'pre',
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader',
                    {

                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                            url: false // don't complain about url() in css
                        }

                    }, 'sass-loader', ],
                include: path.resolve(__dirname, "")
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

        ],
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', ],
    },
    devtool: 'source-map',
    mode: "development",
    devServer: {
        static: [
            {directory: path.join(__dirname, 'docs')},
            {directory: path.join(__dirname, '')}
        ],
        compress: true,
        port: 4000,
    },
    plugins: [

    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};
