const path = require("path");

module.exports = {
  entry: "./src/main.ts",
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
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    globalObject: "this",
    clean: true,
    library: {
      name: "hugerte-paste-from-word-plugin",
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
