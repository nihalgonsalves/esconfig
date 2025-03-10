# esconfig

Shared ECMAScript Config (TS, Lint, Prettier)

## Usage

1. Install

   ```sh
   yarn add -D @nihalgonsalves/esconfig typescript typescript-eslint eslint prettier
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

3. `eslint.config.js`

   ```js
   import tseslint from "typescript-eslint";

   import sharedConfig from "@nihalgonsalves/esconfig/eslint.config.shared";

   export default tseslint.config(
     { ignores: [] },
     ...sharedConfig,
     // ... others
   );
   ```

   If you're using React:

   ```js
   import tseslint from "typescript-eslint";

   import sharedConfig from "@nihalgonsalves/esconfig/eslint.config.react-shared";

   export default tseslint.config(
     { ignores: [] },
     ...sharedConfig,
     // ... others
   );
   ```

4. `package.json`

   ```json
   {
     "scripts": {
       "build": "tsc",
       "lint": "eslint ./src/",
       "format": "prettier . --write",
       "format:check": "prettier . --check"
     }
   }
   ```

5. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.
