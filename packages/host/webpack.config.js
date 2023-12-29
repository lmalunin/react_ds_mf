const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

module.exports = ( env, argv ) => {

  const buildDate = new Date();
  const mode = 'production';
  console.log({ mode });

  return {

    performance: {
      hints: false
    },

    entry: `./src/index.ts`,

    output: {
      path: path.resolve(__dirname, 'dist'),

      /*
        Take care to make sure this is unique!
        If you are serving from 1 server. All chunks
        have to go into 1 folder. Duplicated names
        will get files overwritten.
      */

      filename: 'host.frontend.js'
    },

    devtool: 'inline-source-map',

    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new webpack.EnvironmentPlugin({
        BUILD_DATE: buildDate.toISOString()
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          store: 'store@http://localhost:3001/remoteEntry.js',
          header: 'header@http://localhost:3002/remoteEntry.js',
          datashop: 'datashop@http://localhost:3003/remoteEntry.js',
          algopack: 'algopack@http://localhost:3004/remoteEntry.js',
        },
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  }
};
