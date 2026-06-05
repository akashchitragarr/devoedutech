import { site, navLinks } from '@/lib/content';
import BackToTop from './BackToTop';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-12 md:gap-8">
          {/* brand + credentials */}
          <div className="col-span-2 md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/logo.png" alt={site.name} width={300} height={125} className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/55">
              Building India&apos;s Bharat hospitality skilling infrastructure. The parent company behind Hotelwaley.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge gap-1.5 text-white/70">
                <i className="bi bi-patch-check-fill text-gold-light" aria-hidden="true" /> DPIIT Recognised
              </span>
              <span className="badge gap-1.5 text-white/70">
                <i className="bi bi-trophy-fill text-gold-light" aria-hidden="true" /> Elevate 2023 Winner
              </span>
            </div>
          </div>

          {/* explore */}
          <nav className="md:col-span-3" aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.platform}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-gold-light"
                >
                  Hotelwaley <i className="bi bi-box-arrow-up-right text-xs" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          {/* contact */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/55">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <i className="bi bi-envelope mt-0.5 text-gold-light" aria-hidden="true" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt mt-0.5 text-gold-light" aria-hidden="true" />
                <span className="font-light leading-relaxed">{site.address}</span>
              </li>
              <li>
                <a
                  href={site.platform}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <i className="bi bi-globe mt-0.5 text-gold-light" aria-hidden="true" />
                  <span>{site.platformLabel}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {site.year} {site.name}. <span className="text-white/30">CIN: {site.cin}</span>
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
