# esconfig

Shared ECMAScript Config (TS, Lint, Prettier)

## Usage

1. Install

   ```sh
   yarn add -D @nihalgonsalves/esconfig typescript eslint prettier
   ```

2. `tsconfig.json`

   ```json
   {
     "extends": "@nihalgonsalves/esconfig",
     "compilerOptions": {
       "outDir": "./build",
       "rootDir": "./src"
     },
     "include": ["./src"]
   }
   ```

3. `.eslintrc`

   ```json
   {
     "extends": "./node_modules/@nihalgonsalves/esconfig/.eslintrc"
   }
   ```

   If you're using React:

   ```json
   {
     "extends": [
       "./node_modules/@nihalgonsalves/esconfig/.eslintrc",
       "./node_modules/@nihalgonsalves/esconfig/.eslintrc.react"
     ]
   }
   ```

4. `.prettierrc`

   ```json
   "@nihalgonsalves/esconfig/.prettierrc"
   ```

5. `package.json`

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

6. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.
