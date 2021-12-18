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

    }
}
module.exports = merge(common, developConfig);
