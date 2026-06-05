import { site, contacts } from '@/lib/content';

export default function Contact() {
  return (
    <section id="contact" className="section section-light">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* intro + direct contact */}
          <div className="lg:col-span-5">
            <p className="eyebrow reveal text-gold-deep">Get in Touch</p>
            <h2 className="section-title reveal text-foreground">
              Let&apos;s build <em className="text-gold-deep">Bharat Hospitality</em> together.
            </h2>
            <p className="section-lead reveal">
              Whether you run a property, lead an association, or back category-defining infrastructure, we&apos;d love
              to hear from you.
            </p>

            <ul className="reveal mt-9 space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4 transition-colors">
                  <span className="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                    <i className="bi bi-envelope" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Email
                    </span>
                    <span className="font-medium text-foreground transition-colors group-hover:text-gold-deep">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-4">
                  <span className="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                    <i className="bi bi-geo-alt" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Location
                    </span>
                    <span className="font-medium text-foreground">{site.location}</span>
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={site.platform}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-4 transition-colors"
                >
                  <span className="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                    <i className="bi bi-globe" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Platform
                    </span>
                    <span className="font-medium text-foreground transition-colors group-hover:text-gold-deep">
                      {site.platformLabel}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* audience cards as clickable rows */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {contacts.map((card) => {
                const external = !card.link.startsWith('mailto:');
                return (
                  <a
                    key={card.title}
                    href={card.link}
                    {...(external ? { target: '_blank', rel: 'noopener' } : {})}
                    className="card group flex items-center gap-5 p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg sm:p-7"
                  >
                    <span className="icon-tile shrink-0 bg-background text-gold-deep">
                      <i className={`bi ${card.icon}`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                        {card.label}
                      </span>
                      <span className="mt-1 block font-display text-lg font-bold text-foreground">{card.title}</span>
                      <span className="mt-1.5 block text-sm font-light leading-relaxed text-muted-foreground">
                        {card.text}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep">
                        {card.linkText}
                        <i
                          className="bi bi-arrow-right transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
