# esconfig

Shared ECMAScript Config (TypeScript, oxlint, oxfmt, optional eslint)

## Usage

1. Install

   ```sh
   pnpm add -D @nihalgonsalves/esconfig typescript oxlint oxlint-tsgolint oxfmt
   # optionally for react:
   pnpm add -D eslint
   ```

2. `tsconfig.json`

   ```json
   {
     "extends": "@nihalgonsalves/esconfig/tsconfig.shared.json",
     "compilerOptions": {
       "outDir": "./build",
       "rootDir": "./src"
     },
     "include": ["./src"]
   }
   ```

3. copy [`.oxlintrc.json`](./.oxlintrc.json)

4. `.oxlintrc.json`

   ```json
   {
     "extends": ["node_modules/@nihalgonsalves/esconfig/.oxlintrc.json"]
   }
   ```

5. If you're using React, `eslint.config.js`:

   ```js
   import tseslint from "typescript-eslint";

   import sharedConfig from "@nihalgonsalves/esconfig/eslint.config.react-shared";

   export default tseslint.config(
     { ignores: [] },
     ...sharedConfig,
     // ... others
   );
   ```

6. `package.json`

   ```json
   {
     "scripts": {
       "build": "tsc",
       "lint": "oxlint --type-aware --report-unused-disable-directives-severity=error && eslint ./src/",
       "format": "oxfmt",
       "format:check": "oxfmt --check"
     }
   }
   ```

7. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.
