import { founder } from '@/lib/content';

export default function Founder() {
  return (
    <section id="founder" className="section bg-secondary/40">
      <div className="shell">
        <p className="eyebrow reveal">The Founder</p>
        <h2 className="section-title reveal text-white">
          Meet <em>{founder.name}</em>
        </h2>
        <p className="section-lead reveal">{founder.title}</p>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* portrait + facts */}
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <figure className="relative m-0">
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-gold/15 to-transparent blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary ring-1 ring-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/ajay-new-web.jpeg"
                    alt={founder.name}
                    width={981}
                    height={1024}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <figcaption className="absolute inset-x-5 bottom-5">
                    <span className="font-display text-xl font-bold text-white">{founder.name}</span>
                    <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-gold-light">
                      Founder &amp; Managing Director
                    </span>
                  </figcaption>
                </div>
              </figure>

              {/* highlight chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {founder.highlights.map((hl) => (
                  <span key={hl.label} className="badge gap-1.5 border-white/15 text-white/75">
                    <i className={`bi ${hl.icon} text-gold-light`} aria-hidden="true" />
                    {hl.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* narrative led by pull-quote */}
          <div className="lg:col-span-7">
            <figure className="reveal m-0 border-l-2 border-gold pl-6">
              <blockquote className="max-w-xl font-serif text-2xl font-medium italic leading-snug text-white md:text-3xl">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </figure>

            <div className="mt-9 space-y-5 border-t border-border pt-9">
              {founder.story.map((para, i) => (
                <p key={i} className="reveal text-base font-light leading-relaxed text-white/75">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
