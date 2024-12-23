export default [
  {
    input: "./src/index.js",
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { file: "dist/index.esm.mjs", format: "es" },
      { file: "dist/index.umd.js", format: "umd", name: "unitFlip" },
    ],
  },
];
