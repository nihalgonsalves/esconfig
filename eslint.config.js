import sharedConfig from "./eslint.config.shared.js";

export default [
  ...sharedConfig,
  {
    rules: {
      "import/extensions": "off",
    },
  },
];
