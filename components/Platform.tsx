import { site } from '@/lib/content';

export default function Platform() {
  return (
    <section className="border-y border-border bg-background">
      <div className="shell py-16 md:py-20">
        <div className="card reveal flex flex-col items-start justify-between gap-8 overflow-hidden p-6 sm:p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="eyebrow">Our Brand</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Meet <em className="not-italic text-gold-light">Hotelwaley</em>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
              India&apos;s first vernacular microlearning platform for frontline hospitality workers. Mobile-first.
              Multilingual. Built for Bharat.
            </p>
          </div>
          <a
            href={site.platform}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-lg w-full shrink-0 md:w-auto"
          >
            Visit Hotelwaley <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
