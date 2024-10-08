import sharedConfig from "./eslint.config.shared.js";

export default [
  ...sharedConfig,
  {
    rules: {
      "import/extensions": "off",
      "import/no-default-export": "off",
    },
  },
];
