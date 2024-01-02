// @ts-check

/** @type import('eslint-define-config').ESLintConfig */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    project: "./**/tsconfig*.json",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: require("./eslint-rules-base"),
};
