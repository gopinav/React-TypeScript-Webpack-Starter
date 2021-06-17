const path = require("path");
const package = require("../package.json");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

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
    path: path.resolve(__dirname, "..", "./build"),
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
    new WebpackPwaManifest({
      name: package.name,
      short_name: package.name,
      description: package.description,
      background_color: package["theme-color"],
      orientation: "any",
      theme_color: package["theme-color"],
      fingerprints: false,
      publicPath: "/",
      icons: [
        {
          src: path.resolve(__dirname, "..", "src/assets/icons/logo512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          ios: true
        },
        {
          src: path.resolve(__dirname, "..", "src/assets/icons/maskable512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: "maskable",
          ios: true
        }
      ]
    })
  ],
  stats: "errors-only",
};
