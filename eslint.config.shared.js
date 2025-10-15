import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,
  // @ts-expect-error nullability
  {
    // extract only the rules, because this config otherwise applies only to
    // TypeScript extensions, which causes problems with checkJs
    rules: tseslint.configs.eslintRecommended.rules,
  },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/default-param-last": ["error"],
      "@typescript-eslint/no-loop-func": ["error"],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
          enforceForJSX: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test/**",
            "tests/**",
            "spec/**",
            "**/__tests__/**",
            "**/__mocks__/**",
            "test.{js,jsx}",
            "test.{ts,tsx}",
            "test-*.{js,jsx}",
            "test-*.{ts,tsx}",
            "**/*{.,_}{test,spec}.{js,jsx}",
            "**/*{.,_}{test,spec}.{ts,tsx}",
            "**/*.config.{js,ts,cjs,mjs,cts,mts}",
            "**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
          ],
          optionalDependencies: false,
        },
      ],
      "import/no-default-export": ["error"],
      "import/order": [
        "error",
        {
          pathGroups: [
            {
              pattern: "@nihalgonsalves/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          groups: [
            "builtin",
            "external",
            "internal",
            "unknown",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/no-duplicates": ["error", { "prefer-inline": true }],
      "import/no-unresolved": "off",
      "func-style": ["error", "expression"],
      "arrow-body-style": "error",
      "object-shorthand": "error",
      "no-useless-rename": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
        },
      ],
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never",
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        { ignorePrimitives: { boolean: true, string: true } },
      ],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        { allowNullableBoolean: true, allowNullableString: true },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        {
          allowDefaultCaseForExhaustiveSwitch: true,
          requireDefaultForNonUnion: true,
          considerDefaultExhaustiveForUnions: false,
        },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/consistent-return": "error",
    },
    settings: {
      "import/extensions": [
        ".cjs",
        ".mjs",
        ".js",
        ".jsx",
        ".cts",
        ".mts",
        ".ts",
        ".tsx",
      ],
      "import/external-module-folders": ["node_modules", "node_modules/@types"],
      "import/parsers": {
        "@typescript-eslint/parser": [".cts", ".mts", ".ts", ".tsx"],
      },
      "import/resolver": {
        node: {
          extensions: [
            ".cjs",
            ".mjs",
            ".js",
            ".jsx",
            ".cts",
            ".mts",
            ".ts",
            ".tsx",
          ],
        },
      },
    },
  },
  {
    files: ["**/*.config.*"],
    rules: {
      "import/no-default-export": "off",
    },
  },

  prettierConfig,
);
