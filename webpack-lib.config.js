const path = require("path");

module.exports = {
  entry: "./src/plugin/lib.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    globalObject: "this",
    clean: true,
    library: {
      name: "hugerte-paste-from-word-lib",
      type: "umd",
    },
  },
  externals: {
    hugerte: {
      commonjs: "hugerte",
      commonjs2: "hugerte",
      amd: "hugerte",
      root: "hugerte",
    },
  },
};
