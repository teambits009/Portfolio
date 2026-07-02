/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project; a stray package-lock.json in the
  // home directory otherwise confuses Next's output-file-tracing inference.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
