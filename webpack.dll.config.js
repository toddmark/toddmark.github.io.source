const webpack = require("webpack");
const path = require("path");
let isDev = false;
const env = process.env.NODE_ENV;
isDev = env === "development" ? true : false;

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    bundle: [
      "react",
      "react-dom",
      "jquery",
      "gsap",
      "scrollmagic",
      "popper.js",
      "d3"
      //其他库
    ],
    // semantic: [],
    bootstrap: ["bootstrap", "bootstrap/dist/css/bootstrap.min.css"]
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].dll.js",
    library: "[name]_[chunkhash]_library"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|ttf|eot|woff2)$/,
        loader: "file-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader?name=assets/img-[sha512:hash:base64:7].[ext]"
      }
      // {
      // test: /bootstrap.+\.(jsx|js)$/,
      // loader: "imports-loader?jQuery=jquery,$=jquery,this=>window"
      // }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[chunkhash]_library",
      path: path.join(__dirname, "./manifest.json")
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: "popper.js"
    })
  ]
};
