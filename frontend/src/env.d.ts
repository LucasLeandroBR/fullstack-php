/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * We can extends the env types here
 * @see https://vitejs.dev/guide/env-and-mode.html#env-files
 */
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: "development" | "production" | "test";
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
