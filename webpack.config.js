const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './sniper_passo3_backdoor.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sniper.min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: false,
                        drop_debugger: true,
                        pure_funcs: []
                    },
                    mangle: true,
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};