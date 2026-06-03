<!-- FOUNDER -->
<section id="founder" class="section bg-secondary/40">
  <div class="shell">
    <p class="eyebrow reveal">The Founder</p>

    <div class="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

      <!-- photo -->
      <div class="reveal lg:col-span-5">
        <figure class="relative m-0 lg:sticky lg:top-28">
          <div class="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-gold/15 to-transparent blur-2xl"></div>
          <div class="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary ring-1 ring-white/5">
            <img src="assets/images/team-ajay.jpg" alt="<?= e($founder['name']) ?>"
                 width="992" height="558" loading="lazy"
                 class="absolute inset-0 h-full w-full object-cover object-center">
            <span class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent"></span>
            <figcaption class="absolute inset-x-5 bottom-5">
              <span class="font-display text-xl font-bold text-white"><?= e($founder['name']) ?></span>
              <span class="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-gold-light">Founder &amp; Managing Director</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <!-- story -->
      <div class="lg:col-span-7">
        <h2 class="reveal font-display text-3xl font-bold leading-tight text-white md:text-4xl">
          <?= e($founder['name']) ?>
        </h2>
        <p class="reveal mt-2 text-xs font-medium uppercase tracking-[0.12em] text-gold-light">
          <?= e($founder['title']) ?>
        </p>

        <!-- highlight chips -->
        <div class="reveal mt-5 flex flex-wrap gap-2">
          <?php foreach ($founder['highlights'] as $hl): ?>
            <span class="badge gap-1.5 border-white/15 text-white/75">
              <i class="bi <?= e($hl['icon']) ?> text-gold-light" aria-hidden="true"></i>
              <?= e($hl['label']) ?>
            </span>
          <?php endforeach; ?>
        </div>

        <p class="reveal mt-7 text-base font-light leading-relaxed text-white/75"><?= e($founder['story'][0]) ?></p>

        <!-- quote card -->
        <figure class="card reveal relative my-8 bg-card/60 p-7 pt-9">
          <i class="bi bi-quote pointer-events-none absolute left-5 top-2 text-6xl leading-none text-gold/25" aria-hidden="true"></i>
          <blockquote class="relative font-display text-xl font-medium leading-snug text-white md:text-2xl">
            <?= e($founder['quote']) ?>
          </blockquote>
        </figure>

        <?php foreach (array_slice($founder['story'], 1) as $para): ?>
          <p class="reveal mb-5 text-base font-light leading-relaxed text-white/75"><?= e($para) ?></p>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
