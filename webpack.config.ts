import Dotenv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import webpack from "webpack";

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        app: [path.resolve(__dirname, "src")],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
        plugins: [new TsconfigPathsPlugin({})],
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader" }],
            },
            {
                test: /\.css$/i,
                sideEffects: true,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            environment: process.env["NODE_ENV"],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new Dotenv(),
    ],
    devServer: {
        client: {
            overlay: false,
        },
        host: "0.0.0.0",
        port: "8080",
        historyApiFallback: true,
        hot: true,
        open: false,
        static: path.resolve(__dirname, "build"),
        proxy: {
            ["/notion"]: {
                target: `https://api.notion.com`,
                router: () => `https://api.notion.com`,
                changeOrigin: true,
                pathRewrite: { "^/notion": "" },
            },
        },
    },
};
