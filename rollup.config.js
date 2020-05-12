import path from 'path';
import typescript from '@wessberg/rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'pollen.css',
      format: 'es'
    },
    plugins: [
      typescript(),
      postcss({
        extract: path.resolve('pollen.css')
      })
    ]
  },
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
