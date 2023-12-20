//const { alias, configPaths } = require("react-app-rewire-alias");
const { aliasDangerous, configPaths, CracoAliasPlugin } = require('react-app-rewire-alias/lib/aliasDangerous')
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require("./package.json");
const {
  override,
  babelInclude,
  removeModuleScopePlugin,
} = require("customize-cra");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function override( config ) {

  config.devServer = {
    port: 3003,
    historyApiFallback: true,
  }

  config.output.publicPath = "http://localhost:3003/";

  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "datashop",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./App": "./src/App",
          "./Datashop": "./src/Datashop",
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ),
  );

  aliasDangerous({
    ...configPaths("tsconfig.paths.json"),
  })(config);

  return config;
};
