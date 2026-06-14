import type { NextConfig } from "next";

const publicUrl = process.env.PUBLIC_URL ?? "";
const basePath = publicUrl === "/" || publicUrl === "" ? undefined : publicUrl;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
