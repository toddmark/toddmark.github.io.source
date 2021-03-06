const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

let isDev = false;
const env = process.env.NODE_ENV;
isDev = env === "development" ? true : false;
console.log(isDev ? "开发环境" : "生产环境");
const htmlsMap = [
  {
    template: "index",
    chunks: ["index"]
  },
  {
    template: "d3",
    chunks: ["d3"]
  }
];

const htmlFiles = (function() {
  let result = [];
  htmlsMap.map(item => {
    result.push(
      new HtmlWebpackPlugin({
        template: `./src/template/${item.template}.html`,
        chunks: item.chunks,
        filename: `${item.template}.html`
      }),
      new AddAssetHtmlPlugin({
        filepath: require.resolve("./build/bundle.dll.js")
      }),
      new AddAssetHtmlPlugin({
        filepath: require.resolve("./build/bootstrap.dll.js")
      })
      // new AddAssetHtmlPlugin({
      //   filepath: require.resolve("./build/semantic.dll.js")
      // }),
    );
  });
  return result;
})();

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    // commons: ["jquery", "bootstrap"],
    index: ["./src/template/index.js"],
    d3: ["./src/template/d3.js"]
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve("build"),
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        // test: /\.less$/,
        // loader: "style-loader!css-loader!less-loader"
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              // modules: true,
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              }
            }
          },
          {
            loader: "less-loader"
          }
        ]
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
        exclude: /node_modules/,
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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.join(__dirname, "./manifest.json")
    })
  ]
    .concat(htmlFiles, new ProgressBarPlugin())
    .concat(
      isDev
        ? [
            // 开发环境
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
            // new BundleAnalyzerPlugin()
          ]
        : [
            // 生产环境
            new webpack.DefinePlugin({
              "process.env": {
                NODE_ENV: JSON.stringify("production")
              }
            })
          ]
    )
};
