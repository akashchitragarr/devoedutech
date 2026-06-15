import { site, heroVideo } from '@/lib/content';
import VideoFacade from './VideoFacade';

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient glows */}
      <div
        className="hero-glow -right-40 -top-40 h-[480px] w-[480px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.12) 0%, transparent 70%)' }}
      />
      <div
        className="hero-glow -bottom-40 -left-32 h-[400px] w-[400px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--secondary) / 0.85) 0%, transparent 70%)' }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="reveal max-w-xl font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl">
              Building India&apos;s <em className="not-italic text-gold-light">Bharat Hospitality</em> Skilling
              Infrastructure
            </h1>
            <p className="reveal mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/70 sm:text-base">
              {site.brand} is the parent company behind Hotelwaley, India&apos;s first vernacular hospitality skilling
              platform, training the 40 million frontline workers who run the country&apos;s hotels and restaurants.
            </p>
            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.platform}
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                <i className="bi bi-box-arrow-up-right" aria-hidden="true" /> Visit Hotelwaley
              </a>
              <a href="#about" className="btn btn-outline btn-lg w-full sm:w-auto">
                Our Mission
              </a>
            </div>
          </div>

          <figure className="reveal relative m-0">
            {/* soft glow for depth */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" />

            <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-2xl ring-1 ring-white/5 transition-colors duration-300 hover:border-gold/40">
              {/* player chrome */}
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <i className="bi bi-play-circle-fill text-gold-light" aria-hidden="true" />
                  Our Story · Hotelwaley
                </span>
              </div>
              <div className="aspect-video bg-black">
                <VideoFacade youtubeId={heroVideo.youtubeId} label="Devo Edutech — Hotelwaley" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </header>
  );
}
