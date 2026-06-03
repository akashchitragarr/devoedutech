<!-- HERO -->
<header class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
  <!-- ambient glows -->
  <div class="hero-glow -right-40 -top-40 h-[480px] w-[480px]"
       style="background: radial-gradient(circle, hsl(var(--gold) / 0.12) 0%, transparent 70%);"></div>
  <div class="hero-glow -bottom-40 -left-32 h-[400px] w-[400px]"
       style="background: radial-gradient(circle, hsl(var(--secondary) / 0.85) 0%, transparent 70%);"></div>

  <div class="shell relative">
    <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <h1 class="reveal max-w-xl font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl">
          Building India's <em class="not-italic text-gold-light">Bharat Hospitality</em> Skilling Infrastructure
        </h1>
        <p class="reveal mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/70 sm:text-base">
          <?= e($site['brand']) ?> is the parent company behind Hotelwaley — India's first
          vernacular hospitality skilling platform, training the 40 million frontline workers
          who run the country's hotels and restaurants.
        </p>
        <div class="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener" class="btn btn-primary btn-lg w-full sm:w-auto">
            <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> Visit Hotelwaley
          </a>
          <a href="#about" class="btn btn-outline btn-lg w-full sm:w-auto">Our Mission</a>
        </div>
      </div>

      <figure class="reveal relative m-0">
        <!-- soft glow for depth -->
        <div class="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl"></div>

        <div class="group overflow-hidden rounded-xl border border-border bg-card shadow-2xl ring-1 ring-white/5 transition-colors duration-300 hover:border-gold/40">
          <!-- player chrome -->
          <div class="flex items-center gap-3 border-b border-border px-4 py-3">
            <span class="flex gap-1.5" aria-hidden="true">
              <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
            </span>
            <span class="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <i class="bi bi-play-circle-fill text-gold-light" aria-hidden="true"></i>
              Our Story · Hotelwaley
            </span>
          </div>
          <div class="aspect-video bg-black">
            <button type="button" data-yt-id="3OmTG72bgLM"
                    aria-label="Play video: Devo Edutech — Hotelwaley"
                    class="group/play relative block h-full w-full cursor-pointer">
              <img src="assets/images/promo-video-thumbnail.jpg" alt=""
                   width="800" height="517" loading="lazy"
                   class="absolute inset-0 h-full w-full object-cover">
              <span class="absolute inset-0 bg-black/25 transition-colors group-hover/play:bg-black/15"></span>
              <span class="absolute inset-0 grid place-items-center">
                <span class="grid h-16 w-16 place-items-center rounded-full bg-primary/90 text-white shadow-xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                  <i class="bi bi-play-fill ml-0.5 text-3xl" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </figure>
    </div>
  </div>
</header>
