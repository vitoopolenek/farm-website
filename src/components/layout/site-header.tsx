import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteName } from "@/config/site";
import { routes } from "@/config/routes";
import { SiteNav } from "./site-nav";
import { TopBar } from "./top-bar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <TopBar />
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href={routes.home}
          className="shrink-0 text-lg font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          {siteName}
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
