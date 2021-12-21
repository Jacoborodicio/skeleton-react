const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const path = require("path");

const developConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        hot: true
        // open: "chrome" // To open the browser directly

    },
    target: "web",
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/,
            },
        ]
    }
}
module.exports = merge(common, developConfig);
