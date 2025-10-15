import type { defineConfig } from "eslint/config";

declare const sharedConfig: ReturnType<typeof defineConfig>;

export default sharedConfig;
