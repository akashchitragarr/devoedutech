<!-- FOUNDER -->
<section id="founder" class="section bg-secondary/40">
  <div class="shell">
    <p class="eyebrow reveal">The Founder</p>
    <h2 class="section-title reveal text-white">Meet <em><?= e($founder['name']) ?></em></h2>
    <p class="section-lead reveal"><?= e($founder['title']) ?></p>

    <div class="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

      <!-- portrait + facts -->
      <div class="reveal lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <figure class="relative m-0">
            <div class="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-gold/15 to-transparent blur-2xl"></div>
            <div class="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary ring-1 ring-white/5">
              <img src="assets/images/ajay-new-web.jpeg" alt="<?= e($founder['name']) ?>"
                   width="981" height="1024" loading="lazy"
                   class="absolute inset-0 h-full w-full object-cover object-center">
              <span class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent"></span>
              <figcaption class="absolute inset-x-5 bottom-5">
                <span class="font-display text-xl font-bold text-white"><?= e($founder['name']) ?></span>
                <span class="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-gold-light">Founder &amp; Managing Director</span>
              </figcaption>
            </div>
          </figure>

          <!-- highlight chips -->
          <div class="mt-5 flex flex-wrap gap-2">
            <?php foreach ($founder['highlights'] as $hl): ?>
              <span class="badge gap-1.5 border-white/15 text-white/75">
                <i class="bi <?= e($hl['icon']) ?> text-gold-light" aria-hidden="true"></i>
                <?= e($hl['label']) ?>
              </span>
            <?php endforeach; ?>
          </div>
        </div>
      </div>

      <!-- narrative led by pull-quote -->
      <div class="lg:col-span-7">
        <figure class="reveal m-0 border-l-2 border-gold pl-6">
          <blockquote class="max-w-xl font-serif text-2xl font-medium italic leading-snug text-white md:text-3xl">
            &ldquo;<?= e($founder['quote']) ?>&rdquo;
          </blockquote>
        </figure>

        <div class="mt-9 space-y-5 border-t border-border pt-9">
          <?php foreach ($founder['story'] as $para): ?>
            <p class="reveal text-base font-light leading-relaxed text-white/75"><?= e($para) ?></p>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
