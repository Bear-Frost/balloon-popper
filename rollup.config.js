import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/main.js",
    output: [
      { file: "dist/index.min.cjs.js", format: "cjs" },
      { file: "dist/index.min.esm.js", format: "es" },
      { file: "dist/index.min.umd.js", format: "umd", name: "unitFlip" },
    ],
    plugins: [terser()],
  },
];
