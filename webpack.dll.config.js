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
    bootstrap: ["bootstrap", "bootstrap/dist/css/bootstrap.min.css"]
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].dll.js",
    library: "[name]_[chunkhash]_library"
  },
  module: require("./webpack.config").module,
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
