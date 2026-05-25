import type { Metadata } from "next";
import { siteName } from "@/config/site";
import type { PageMeta } from "@/types/content";

export function createPageMetadata({ title, description }: PageMeta): Metadata {
  return { title, description };
}

export const rootMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
};
