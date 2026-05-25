import type { NextConfig } from "next";
import { routes } from "./src/config/routes";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: routes.ponudba, permanent: true },
      { source: "/contact", destination: routes.kontakt, permanent: true },
    ];
  },
};

export default nextConfig;
