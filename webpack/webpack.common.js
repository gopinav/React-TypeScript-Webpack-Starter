const path = require("path");
const package = require("../package.json");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyPlugin = require("copy-webpack-plugin");
const {InjectManifest} = require("workbox-webpack-plugin");

const buildFolder = path.resolve(__dirname, "..", "./build");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/react/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            include: path.resolve(__dirname, "..", "./src")
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
        ],
    },
    output: {
        path: buildFolder,
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html"),
            title: package.name,
            favicon: path.resolve(__dirname, "..", "./src/assets/icons/favicon.ico"),
            meta: {
                author: package.author,
                description: package.description,
                keyword: package.keyword,
                "theme-color": package["theme-color"]
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "src/assets/fallbacks/404.html"),
            filename: "404.html",
            title: "Error"
        }),
        new WebpackPwaManifest({
            name: package.name,
            short_name: package.name,
            description: package.description,
            background_color: package["background-color"],
            orientation: "any",
            theme_color: package["theme-color"],
            publicPath: "/",
            icons: [
                {
                    src: path.resolve(__dirname, "..", "src/assets/icons/logo512.png"),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
                {
                    src: path.resolve(__dirname, "..", "src/assets/icons/maskable512.png"),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: "maskable"
                }
            ]
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "..", "src/robots.txt"), to: buildFolder },
            ],
        }),
        new InjectManifest({
            swSrc: path.resolve(__dirname, "..", "src/sw.ts")
        })
    ]
};
