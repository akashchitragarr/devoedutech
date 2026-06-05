import { site, whatWeDo } from '@/lib/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* left: sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow reveal">What We Do</p>
              <h2 className="section-title reveal">
                One company. <em>One mission.</em>
              </h2>
              <p className="section-lead reveal">
                {site.name} is a DPIIT-recognised startup incorporated in 2022, building the hospitality skilling
                infrastructure India has needed for decades. Our operating brand Hotelwaley delivers practical,
                mobile-first, multilingual training to frontline hospitality workers across Tier 2 and Tier 3 India.
              </p>

              {/* mini proof points */}
              <dl className="reveal mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                <div className="bg-card px-5 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Languages
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-gold-light">7</dd>
                </div>
                <div className="bg-card px-5 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Workers
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-gold-light">40M+</dd>
                </div>
              </dl>

              <a
                href={site.platform}
                target="_blank"
                rel="noopener"
                className="reveal btn btn-primary btn-lg mt-7"
              >
                Visit Hotelwaley <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* right: numbered feature rows */}
          <div className="reveal lg:col-span-7">
            <ul className="divide-y divide-border">
              {whatWeDo.map((card, i) => (
                <li
                  key={card.title}
                  className="group flex items-start gap-4 py-7 first:pt-0 last:pb-0 sm:gap-6"
                >
                  {/* index */}
                  <span
                    className="hidden shrink-0 pt-1 font-display text-base font-bold tabular-nums text-gold-light/40 transition-colors group-hover:text-gold-light sm:block"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* icon */}
                  <span className="icon-tile shrink-0 border border-gold/20 bg-gold/10 text-gold-light transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-background">
                    <i className={`bi ${card.icon}`} aria-hidden="true" />
                  </span>

                  {/* body */}
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-gold-light md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">{card.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
