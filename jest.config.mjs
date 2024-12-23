/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/**
 * @type {import('jest').Config} 
 */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform:{
    "^.+\\.jsx?$":"babel-jest"
  },
};

export default config;
