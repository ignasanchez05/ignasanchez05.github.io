import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import path from 'path';

const JS_DIST = 'assets/js/dist';
const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'node_modules/jekyll-theme-chirpy/assets/js/dist/theme.min.js',
    output: {
      file: `${JS_DIST}/theme.min.js`,
      format: 'iife'
    },
    plugins: [nodeResolve(), isProd && terser()]
  }
];