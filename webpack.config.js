﻿const path = require('path');

module.exports = {
    entry: {
        'index': './docs/index.ts',
        'render-component': './node_modules/@nextrap/doc-visualizer/src/preview/render-component.ts'
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                        }
                    }
                ],
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
                            url: false
                        }

                    }, 'sass-loader', ],
                include: path.resolve(__dirname, "")
            },


        ],
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', ],
    },
    devtool: 'source-map',
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        compress: true,
        port: 4000,
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            middlewares.unshift((req, res, next) => {
                if (req.url && (req.url === '/render-component' || req.url.startsWith('/render-component?'))) {
                    // Resolve HTML path from node_modules package
                    const htmlPath = path.resolve(__dirname, 'node_modules/@nextrap/doc-visualizer/src/preview', 'render-component.html');
                    res.setHeader('Content-Type', 'text/html');
                    res.sendFile(htmlPath, (err) => {
                        if (err) {
                            console.error("[Middleware] Error sending render-component.html:", err);
                            res.status(500).send('Internal Server Error');
                        }
                    });
                } else {
                    next();
                }
            });

            return middlewares;
        },
    },
    plugins: [

    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};
