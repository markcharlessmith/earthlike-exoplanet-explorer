const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
  },
  // publicPath: '/',
  module: {
    rules: [
      {
        // test: /\.js$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    proxy: {
      "/api**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/assets/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },
  plugins: [new HWP({ template: path.join(__dirname, "/src/index.html") })],
};
