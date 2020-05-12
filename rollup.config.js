import path from 'path';
import typescript from '@wessberg/rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';

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
  }
];
