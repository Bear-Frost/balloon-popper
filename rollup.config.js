import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { file: "dist/index.esm.mjs", format: "es" },
      { file: "dist/index.umd.js", format: "umd", name: "unitFlip" },
    ],
    plugins:[
      resolve(),
      commonjs(),
    ]
  },
];
