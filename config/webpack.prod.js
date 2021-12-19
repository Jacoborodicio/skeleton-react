const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const productionConfig = {
    mode: "production",
    devtool: "source-map", // Useful for Staging to debug the .maps files. Avoid to upload them to live server
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/,
            },
        ]
    }
};

module.exports = merge(common, productionConfig);
