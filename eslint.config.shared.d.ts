import type { config } from "typescript-eslint";

declare const sharedConfig: ReturnType<typeof config>;

export default sharedConfig;
