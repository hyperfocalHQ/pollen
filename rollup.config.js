import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';
import glob from 'fast-glob';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/core/*.css',
    output: {
      file: 'pollen.css',
      format: 'es'
    },
    plugins: [
      multi(),
      postcss({
        extract: true
      })
    ]
  },
  ...glob.sync('src/addons/*.css').map((file) => ({
    input: file,
    output: {
      file: `addons/${file.split('/').pop()}`,
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true
      })
    ]
  })),
  {
    input: 'src/utils/index.ts',
    output: {
      dir: 'utils',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      resolve({ extensions: ['.ts'], browser: true }),
      typescript(),
      terser()
    ]
  }
];
