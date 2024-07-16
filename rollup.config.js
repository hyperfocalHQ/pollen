import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-ts";
import { preserveShebangs } from "rollup-plugin-preserve-shebangs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/utils/index.ts",
    output: {
      dir: "dist/utils",
      format: "es",
    },
    plugins: [
      resolve({ browser: true }),
      typescript({ outDir: "utils" }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [
      resolve(),
      typescript({ outDir: "." }),
      commonjs(),
      preserveShebangs(),
    ],
  },
  {
    input: "@types/pollen.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [resolve({ extensions: [".ts"] }), typescript({ outDir: "." })],
  },
];
