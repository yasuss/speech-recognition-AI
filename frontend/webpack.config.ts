import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
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
        fallback: {
            buffer: require.resolve("buffer"),
            crypto: require.resolve("crypto-browserify"),
            os: require.resolve("os-browserify"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
        },
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
        new webpack.DefinePlugin({
            "process.env.BUILD_TIMESTAMP": new Date().getTime(),
        }),
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
    },
};
