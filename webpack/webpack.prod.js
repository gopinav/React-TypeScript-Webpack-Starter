const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("Production"),
        }),
        new CleanWebpackPlugin()
    ]
};
