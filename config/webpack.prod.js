const common = require("./webpack.common");
const {merge} = require("webpack-merge");

const productionConfig = {
    mode: "production"
};

module.exports = merge(common, productionConfig);
