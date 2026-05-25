import Link from "next/link";
import { address, contact, team } from "@/config/site";
export function ContactDetailsSection() {
  return (
    <div className="space-y-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            E-pošta
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 block text-xl font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent"
          >
            {contact.email}
          </a>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Naslov
          </p>
          <p className="mt-3 text-lg font-medium text-ink">{address.street}</p>
          <p className="text-lg text-muted">{address.city}</p>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Telefon
        </p>
        <ul className="mt-6 divide-y divide-line rounded-2xl border border-line bg-card">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex flex-col justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center"
            >
              <span className="font-medium text-ink">{member.name}</span>
              <Link
                href={`tel:${member.phone}`}
                className="text-lg font-light text-accent transition hover:text-accent-hover"
              >
                {member.phoneDisplay}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
