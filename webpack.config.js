const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
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
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require('autoprefixer')({
                  grid: 'autoplace'
                }),
                require('cssnano')()
              ]
            }
          },
          "sass-loader"
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].scss",
        chunkFilename: "[id].scss"
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico",
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HTMLInlineCSSWebpackPlugin()
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
