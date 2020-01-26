import commonjs from '@rollup/plugin-commonjs'

export default {
  input: require.resolve('esm-bundle-test'),
  output: {
    file: 'index.js',
    format: 'module'
  },
  plugins: [
    commonjs()
  ]
}