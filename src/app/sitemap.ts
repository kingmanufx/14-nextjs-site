import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/services", "/contact"];
  const servicePages = getServices().map(
    (service) => `/services/${service.slug}`,
  );

  return [...pages, ...servicePages].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
