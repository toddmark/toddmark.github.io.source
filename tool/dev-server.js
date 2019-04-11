const webpack = require("webpack");
const config = require("../webpack.config.js");
const port = 8001;
const IP = require("ip");
const myIp = IP.address();

// Add hot js for each webpack config entry
Object.keys(config.entry).map(item => {
  if (item !== "commons") {
    config.entry[item].unshift(
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://${myIp}:${port}/`,
      "webpack/hot/dev-server"
    );
  }
});
const WebpackDevServer = require("webpack-dev-server");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  // publicPath: "./build",
  historyApiFallback: true,
  open: true,
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
});

server.listen(port);
console.log(`\n Listenting at http://${myIp}:${port}`);
