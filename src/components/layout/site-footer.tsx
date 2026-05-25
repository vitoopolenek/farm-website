import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  address,
  contact,
  navItems,
  siteName,
  siteTagline,
  team,
} from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-bg-subtle">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-2">
          <p className="font-semibold text-ink">{siteName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {siteTagline}
          </p>
          <p className="mt-4 text-sm text-muted">
            {address.street}, {address.city}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 inline-block text-sm font-medium text-ink transition hover:text-accent"
          >
            {contact.email}
          </a>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Strani
          </p>
          <nav aria-label="Navigacija v nogi" className="mt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Kontakt
          </p>
          <ul className="mt-4 space-y-3">
            {team.map((member) => (
              <li key={member.name} className="text-sm">
                <span className="text-muted">{member.name}</span>
                <br />
                <a
                  href={`tel:${member.phone}`}
                  className="font-medium text-ink transition hover:text-accent"
                >
                  {member.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
