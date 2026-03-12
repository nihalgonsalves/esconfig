# esconfig

Shared ECMAScript Config (TypeScript, oxlint, oxfmt)

## Usage

1. Install

   ```sh
   pnpm add -D @nihalgonsalves/esconfig typescript oxlint oxlint-tsgolint oxfmt
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

   ```jsonc
   {
     "extends": [
       "node_modules/@nihalgonsalves/esconfig/.oxlintrc.json",
       // optional:
       "node_modules/@nihalgonsalves/esconfig/.oxlintrc.react.json",
     ],
   }
   ```

5. `package.json`

   ```json
   {
     "scripts": {
       "build": "tsc",
       "lint": "oxlint",
       "format": "oxfmt",
       "format:check": "oxfmt --check"
     }
   }
   ```

6. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.
