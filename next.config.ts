import path from "path";
import { fileURLToPath } from "url";

import createNextIntlPlugin from "next-intl/plugin";

/** Absolute path to this project (fixes wrong root when a parent folder has package-lock.json). */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig = {
  reactStrictMode: true,
  /** Avoid hung local `next build` when ESLint is slow or misconfigured. */
  eslint: {
    ignoreDuringBuilds: true
  },
  turbopack: {
    root: __dirname
  },
  outputFileTracingRoot: __dirname
};

export default withNextIntl(nextConfig);

