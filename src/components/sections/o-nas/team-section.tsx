import { address, team } from "@/config/site";

export function TeamSection() {
  return (
    <section className="border-t border-line bg-bg-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Ekipa
        </p>
        <h2 className="mt-4 text-3xl font-light tracking-tight text-ink md:text-4xl">
          To smo mi
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Za vsa vprašanja glede ponudbe in sodelovanja nas kontaktirajte neposredno.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li
              key={member.name}
              className="rounded-2xl border border-line bg-card px-8 py-8"
            >
              <h3 className="text-lg font-medium text-ink">{member.name}</h3>
              <a
                href={`tel:${member.phone}`}
                className="mt-3 inline-block text-lg font-light tracking-wide text-accent transition hover:text-accent-hover"
              >
                {member.phoneDisplay}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-line bg-card px-8 py-8 md:inline-block">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Naslov kmetije
          </p>
          <p className="mt-3 text-lg font-medium text-ink">{address.street}</p>
          <p className="text-lg text-muted">{address.city}</p>
        </div>
      </div>
    </section>
  );
}
