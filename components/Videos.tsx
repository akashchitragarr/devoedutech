import { featuredVideo, languageVideos, videoBase } from '@/lib/content';
import VideoFacade from './VideoFacade';

export default function Videos() {
  return (
    <section id="videos" className="section relative overflow-hidden">
      {/* ambient glow for depth on the dark background */}
      <div
        className="hero-glow -right-40 top-10 h-[420px] w-[420px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, transparent 70%)' }}
      />

      <div className="shell relative">
        <p className="eyebrow reveal text-gold-light">Module Preview</p>
        <h2 className="section-title reveal text-white">
          Housekeeping. In <em className="text-gold-light">your</em> language.
        </h2>
        <p className="section-lead reveal">
          The same lesson, delivered in English, Hindi and Kannada. This is what Bharat-first hospitality training
          looks like. Built for the worker, in the language of the worker.
        </p>

        {/* featured intro video */}
        <div className="reveal mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* player */}
          <figure className="relative order-1 m-0 lg:order-1 lg:col-span-8">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl ring-1 ring-white/5">
              <div className="aspect-video bg-black">
                <VideoFacade
                  src={featuredVideo.src}
                  poster={featuredVideo.poster}
                  label="Introduction to Housekeeping"
                />
              </div>
            </div>
          </figure>

          {/* context panel */}
          <div className="order-2 lg:col-span-4">
            <span className="badge gap-1.5 border-gold/30 bg-gold/10 text-gold-light">
              <i className="bi bi-collection-play-fill" aria-hidden="true" /> Full Module
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">
              Introduction to Housekeeping
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
              What housekeeping really means in a working hotel, and why it is the most important room in the building.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-gold-light">
              <i className="bi bi-translate text-base" aria-hidden="true" /> Available in 3 languages
            </p>
          </div>
        </div>

        {/* language versions */}
        <div className="mt-14 lg:mt-20">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Watch in your language
            </span>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {languageVideos.map((video) => (
              <article
                key={video.roman}
                className="card reveal group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl"
              >
                <div className="relative aspect-video bg-black">
                  <VideoFacade
                    src={`${videoBase}/${video.src}`}
                    poster={`${videoBase}/${video.src}/ik-thumbnail.jpg?tr=so-2`}
                    label={`Introduction to Housekeeping (${video.roman})`}
                    size="sm"
                    chip={video.native}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {video.roman}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground">
                    Introduction to Housekeeping
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{video.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* footnote callout */}
        <div className="reveal mt-12 flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-5 md:p-8 lg:mt-16">
          <span className="icon-tile shrink-0 border border-gold/20 bg-gold/10 text-gold-light">
            <i className="bi bi-translate" aria-hidden="true" />
          </span>
          <p className="text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            <span className="font-semibold text-foreground">Why three languages?</span> Because a frontline worker in
            Belagavi, Bhopal or Bengaluru should not have to learn in a language that is not their own. Hotelwaley is
            being built in seven Indian languages. Housekeeping is the first module. More are on the way.
          </p>
        </div>
      </div>
    </section>
  );
}
