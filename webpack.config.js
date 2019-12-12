const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

module.exports = (env, arg) => {
  const config = {
    entry: "./src/index.ts",
    output: {
      path: Path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      alias: {
        "utility": Path.resolve(__dirname, 'src/utility')
      },
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [{
        test: /\.svg$/,
        loader: "file-loader"
      }, {
        test: /\.ts$/,
        loader: "ts-loader"
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
