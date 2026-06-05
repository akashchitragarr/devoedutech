import { site, credentials } from '@/lib/content';

export default function Recognition() {
  const feature = credentials[0];
  const rest = credentials.slice(1);

  return (
    <section id="recognition" className="section section-light">
      <div className="shell">
        <p className="eyebrow reveal text-gold-deep">Credentials</p>
        <h2 className="section-title reveal text-foreground">
          Trusted. Recognised. <em className="text-gold-deep">Verified.</em>
        </h2>
        <p className="section-lead reveal">
          {site.brand}&apos;s approach has been independently validated by India&apos;s most respected startup and
          industry bodies.
        </p>

        {/* featured credential */}
        <article className="card reveal relative mt-12 overflow-hidden p-8 md:p-10">
          {/* ambient corner glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            {/* pulled stat */}
            <div className="shrink-0">
              <span className="block font-display text-5xl font-bold leading-none text-gold-deep md:text-6xl">
                &#8377;18L
              </span>
              <span className="mt-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Govt. of Karnataka Grant
              </span>
            </div>

            <span className="hidden h-20 w-px bg-border md:block" aria-hidden="true" />

            <div className="min-w-0">
              <span className="badge gap-1.5 border-gold/30 bg-gold/10 text-gold-deep">
                <i className="bi bi-trophy-fill" aria-hidden="true" /> Flagship Recognition
              </span>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                {feature.desc}
              </p>
            </div>
          </div>
        </article>

        {/* supporting credentials */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {rest.map((item) => (
            <article
              key={item.title}
              className="card reveal group flex flex-col p-7 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg"
            >
              <span className="icon-tile border border-gold/20 bg-gold/10 text-gold-deep transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
