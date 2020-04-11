const { PHASE_PRODUCTION_SERVER } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : !process.env.NOW_REGION
        ? require('next/constants') // Get values from `next` package when building locally
        : require('next-server/constants'); // Get values from `next-server` package when building on now v2

require("dotenv").config();

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        // Config used to run in production.
        return {};
    }

    /* eslint-disable */
    const webpack = require('webpack');
    const withLess = require('@zeit/next-less');
    const lessToJS = require('less-vars-to-js');
    const Dotenv = require("dotenv-webpack");
    const fs = require('fs');
    const path = require('path');

    // Where your antd-custom.less file lives
    const themeVariables = lessToJS(
        fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
    );

    // fix: prevents error when .less files are required by node
    if (typeof require !== 'undefined') {
        require.extensions['.less'] = file => {}
    }

    return withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables // make your antd custom effective
        },
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });
            // Here is the magic
            // We push our config into the resolve.modules array
            config.resolve.modules.push(path.resolve('./'));

            config.plugins = [
                ...config.plugins,

                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];

            return config
        }
    })
};