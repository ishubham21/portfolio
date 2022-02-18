const { merge } = require('webpack-merge')
const common = require('./webpack.common')

//custom PORT config
const portConfig = {
    devServer: {
        port: 3000
    }
}

//webpack-dev-server config
const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        compress: true,
        historyApiFallback: true,
        client: {
            reconnect: true,
            overlay: true,
        },
    },
}

module.exports = merge(common, devConfig, portConfig)