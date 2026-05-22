import Link from "next/link";
import { Container } from "@/components/ui/container";

const products = [
  {
    eyebrow: "Glavna ponudba",
    title: "Jabolka",
    description:
      "Naša osnovna ponudba so kakovostna domača jabolka iz sadovnjaka Sadjarstva Leskovar.",
    style: "text-orchard",
  },
  {
    eyebrow: "Sezonska ponudba",
    title: "Češnje",
    description:
      "V času sezone ponudbo dopolnimo s svežimi češnjami. Razpoložljivost je odvisna od letine.",
    style: "text-cherry",
  },
];

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-cream">
        <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orchard">
              Sadjarstvo Leskovar
            </p>

            <h1 className="max-w-xl font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Jabolka iz našega sadovnjaka.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              Sadjarstvo Leskovar je osredotočeno predvsem na pridelavo domačih
              jabolk. V sezoni pri nas najdete tudi sveže češnje.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#ponudba"
                className="rounded-full bg-orchard px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-orchard-dark"
              >
                Oglejte si ponudbo
              </Link>

              <Link
                href="/#kontakt"
                className="rounded-full border border-stone-300 bg-white/50 px-8 py-4 text-center text-sm font-semibold text-stone-900 transition hover:bg-white"
              >
                Stopite v stik
              </Link>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-orchard shadow-xl shadow-stone-900/10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#8ba566]/40 blur-2xl" />
            <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-[#d4aa58]/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-orchard-dark/80 to-transparent" />

            <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">
                Fotografija sadovnjaka
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold text-white">
                Tukaj bomo dodali pravo fotografijo kmetije ali jabolk.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="ponudba" className="scroll-mt-20 bg-white py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orchard">
              Ponudba
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Sadje iz naše pridelave
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-[2rem] border border-stone-200 bg-cream p-8 lg:p-10"
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.22em] ${product.style}`}
                >
                  {product.eyebrow}
                </p>

                <h3 className="mt-5 font-serif text-4xl font-semibold text-stone-950">
                  {product.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-8 text-stone-600">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="o-nas" className="scroll-mt-20 bg-cream-dark py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orchard">
              O nas
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Sadjarstvo Leskovar
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-stone-700">
              Na tej strani bomo predstavili zgodbo sadjarstva, način pridelave,
              ponudbo in vse informacije, ki jih obiskovalec potrebuje za nakup
              ali stik z vami.
            </p>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Ko dodamo dejanske podatke o kmetiji, lahko ta del dopolnimo z
              zgodovino, lokacijo sadovnjakov, sortami jabolk in fotografijami.
            </p>
          </div>
        </Container>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-white py-20 lg:py-28">
        <Container>
          <div className="rounded-[2rem] bg-orchard-dark px-8 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
              Kontakt
            </p>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <h2 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Vas zanima ponudba jabolk ali sezonskih češenj?
              </h2>

              <p className="text-base leading-8 text-white/70">
                V naslednjem koraku bomo sem dodali telefonsko številko,
                e-poštni naslov, lokacijo in informacije o prevzemu.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
