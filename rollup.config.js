import babel from '@rollup/plugin-babel';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'assets/scripts',
    format: 'iife'
  },
  plugins: [
    babel({babelHelpers: 'bundled'}),
    eslint({fix: true}),
    nodeResolve()
  ]
};

export default config;
