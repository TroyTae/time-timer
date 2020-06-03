const fs  = require('fs-extra');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const distDir = 'docs';

module.exports = (env, arg) => {
  const config = {
    entry: './src/index.ts',
    output: {
      path: path.join(process.cwd(), distDir),
      filename: '[name].[chunkhash].js',
      crossOriginLoading: false
    },
    resolve: {
      extensions: ['.js', '.ts'],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [{
        test: /\.svg$/,
        loader: 'file-loader'
      }, {
        test: /\.ts$/,
        loader: 'ts-loader'
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
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

  if (arg.mode === 'production') {
    fs.emptyDirSync(distDir);
  }

  return config;
};
