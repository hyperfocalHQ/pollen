import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-ts';
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/utils/index.ts',
    output: {
      dir: 'utils',
      format: 'cjs'
    },
    plugins: [
      resolve({ extensions: ['.ts'], browser: true }),
      typescript({ outDir: 'utils' }),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: '.',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      typescript({ outDir: '.' }),
      commonjs({ ignoreDynamicRequires: true }),
      preserveShebangs()
    ]
  },
  {
    input: 'src/types.ts',
    output: {
      file: 'index.d.ts',
      format: 'esm'
    },
    plugins: [resolve({ extensions: ['.ts'] }), typescript({ outDir: '.' })]
  }
];
