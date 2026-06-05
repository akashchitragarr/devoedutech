<!-- VIDEOS -->
<section id="videos" class="section relative overflow-hidden">
  <!-- ambient glow for depth on the dark background -->
  <div class="hero-glow -right-40 top-10 h-[420px] w-[420px]"
       style="background: radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, transparent 70%);"></div>

  <div class="shell relative">
    <p class="eyebrow reveal text-gold-light">Module Preview</p>
    <h2 class="section-title reveal text-white">Housekeeping. In <em class="text-gold-light">your</em> language.</h2>
    <p class="section-lead reveal">
      The same lesson, delivered in English, Hindi and Kannada. This is what
      Bharat-first hospitality training looks like. Built for the worker, in the
      language of the worker.
    </p>

    <!-- featured intro video -->
    <div class="reveal mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
      <!-- player -->
      <figure class="relative order-1 m-0 lg:order-1 lg:col-span-8">
        <div class="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" aria-hidden="true"></div>
        <div class="overflow-hidden rounded-xl border border-border bg-card shadow-2xl ring-1 ring-white/5">
          <div class="aspect-video bg-black">
            <button type="button"
                    data-video-src="https://ik.imagekit.io/devoedutech/Devotech-videos/intro-main.mp4"
                    aria-label="Play video: Introduction to Housekeeping"
                    class="group/play relative block h-full w-full cursor-pointer">
              <img src="https://ik.imagekit.io/devoedutech/Devotech-videos/intro-main.mp4/ik-thumbnail.jpg?tr=so-2"
                   alt="" width="1180" height="664" loading="lazy"
                   class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105">
              <span class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 transition-colors group-hover/play:from-black/40"></span>
              <span class="absolute inset-0 grid place-items-center">
                <span class="grid h-16 w-16 place-items-center rounded-full bg-primary/90 text-white shadow-xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110 md:h-20 md:w-20">
                  <i class="bi bi-play-fill ml-1 text-3xl md:text-4xl" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </figure>

      <!-- context panel -->
      <div class="order-2 lg:col-span-4">
        <span class="badge gap-1.5 border-gold/30 bg-gold/10 text-gold-light">
          <i class="bi bi-collection-play-fill" aria-hidden="true"></i> Full Module
        </span>
        <h3 class="mt-4 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">Introduction to Housekeeping</h3>
        <p class="mt-3 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
          What housekeeping really means in a working hotel, and why it is the
          most important room in the building.
        </p>
        <p class="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-gold-light">
          <i class="bi bi-translate text-base" aria-hidden="true"></i> Available in 3 languages
        </p>
      </div>
    </div>

    <!-- language versions -->
    <div class="mt-14 lg:mt-20">
      <div class="reveal">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Watch in your language</span>
      </div>

      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <?php
          $hk_videos = [
              ['native' => 'English', 'roman' => 'EN',      'src' => 'Intro-English.mp4',
               'desc' => 'Built for the frontline worker, in clear and simple English.'],
              ['native' => 'हिन्दी',   'roman' => 'Hindi',   'src' => 'intro-Hindi.mp4',
               'desc' => 'Same lesson, Hindi voiceover. For workers across North and Central India.'],
              ['native' => 'ಕನ್ನಡ',    'roman' => 'Kannada', 'src' => 'intro-kannada.mp4',
               'desc' => 'Same lesson, Kannada voiceover. For the hotels and resorts of Karnataka.'],
          ];
        ?>
        <?php foreach ($hk_videos as $video): ?>
          <article class="card reveal group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl">
            <div class="relative aspect-video bg-black">
              <button type="button"
                      data-video-src="https://ik.imagekit.io/devoedutech/Devotech-videos/<?= e($video['src']) ?>"
                      aria-label="Play video: Introduction to Housekeeping (<?= e($video['roman']) ?>)"
                      class="group/play relative block h-full w-full cursor-pointer">
                <img src="https://ik.imagekit.io/devoedutech/Devotech-videos/<?= e($video['src']) ?>/ik-thumbnail.jpg?tr=so-2"
                     alt="" width="400" height="225" loading="lazy"
                     class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105">
                <span class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 transition-colors group-hover/play:from-black/45"></span>
                <!-- language chip -->
                <span class="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/55 px-3 py-1 font-display text-sm font-bold text-white backdrop-blur-sm">
                  <?= e($video['native']) ?>
                </span>
                <span class="absolute inset-0 grid place-items-center">
                  <span class="grid h-14 w-14 place-items-center rounded-full bg-primary/90 text-white shadow-xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                    <i class="bi bi-play-fill ml-0.5 text-2xl" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <span class="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light"><?= e($video['roman']) ?></span>
              <h3 class="mt-2 font-display text-base font-bold leading-snug text-foreground">Introduction to Housekeeping</h3>
              <p class="mt-2 text-sm font-light leading-relaxed text-muted-foreground"><?= e($video['desc']) ?></p>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>

    <!-- footnote callout -->
    <div class="reveal mt-12 flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-5 md:p-8 lg:mt-16">
      <span class="icon-tile shrink-0 border border-gold/20 bg-gold/10 text-gold-light">
        <i class="bi bi-translate" aria-hidden="true"></i>
      </span>
      <p class="text-sm font-light leading-relaxed text-muted-foreground md:text-base">
        <span class="font-semibold text-foreground">Why three languages?</span>
        Because a frontline worker in Belagavi, Bhopal or Bengaluru should not have to
        learn in a language that is not their own. Hotelwaley is being built in seven
        Indian languages. Housekeeping is the first module. More are on the way.
      </p>
    </div>
  </div>
</section>
