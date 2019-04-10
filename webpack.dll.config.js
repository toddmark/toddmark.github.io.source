const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      // "react",
      // "react-dom",
      "jquery",
      "bootstrap",
      "gsap",
      "scrollmagic",
      "bootstrap/dist/css/bootstrap.min.css",
      "popper.js",
      "d3"
      //其他库
    ]
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
      path: path.join(__dirname, "manifest.json")
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: "popper.js"
    })
  ]
};
