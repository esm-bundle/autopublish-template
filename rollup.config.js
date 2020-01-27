import commonjs from "@rollup/plugin-commonjs";

export default {
  input: require.resolve("autopublish-template"),
  output: {
    file: "index.js",
    format: "module"
  },
  plugins: [commonjs()]
};
