const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist/src"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: ["url-loader"], 
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        )
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["barkh-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
