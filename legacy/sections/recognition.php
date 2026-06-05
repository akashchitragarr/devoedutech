<!-- RECOGNITION -->
<section id="recognition" class="section section-light">
  <div class="shell">
    <p class="eyebrow reveal text-gold-deep">Credentials</p>
    <h2 class="section-title reveal text-foreground">Trusted. Recognised. <em class="text-gold-deep">Verified.</em></h2>
    <p class="section-lead reveal">
      <?= e($site['brand']) ?>'s approach has been independently validated by India's most
      respected startup and industry bodies.
    </p>

    <?php
      // The Elevate grant is the flagship credential — featured; the rest support it.
      $feature = $credentials[0];
      $rest    = array_slice($credentials, 1);
    ?>

    <!-- featured credential -->
    <article class="card reveal relative mt-12 overflow-hidden p-8 md:p-10">
      <!-- ambient corner glow -->
      <div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" aria-hidden="true"></div>

      <div class="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <!-- pulled stat -->
        <div class="shrink-0">
          <span class="block font-display text-5xl font-bold leading-none text-gold-deep md:text-6xl">&#8377;18L</span>
          <span class="mt-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Govt. of Karnataka Grant</span>
        </div>

        <span class="hidden h-20 w-px bg-border md:block" aria-hidden="true"></span>

        <div class="min-w-0">
          <span class="badge gap-1.5 border-gold/30 bg-gold/10 text-gold-deep">
            <i class="bi bi-trophy-fill" aria-hidden="true"></i> Flagship Recognition
          </span>
          <h3 class="mt-4 font-display text-xl font-bold leading-snug text-foreground md:text-2xl"><?= e($feature['title']) ?></h3>
          <p class="mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base"><?= e($feature['desc']) ?></p>
        </div>
      </div>
    </article>

    <!-- supporting credentials -->
    <div class="mt-4 grid gap-4 md:grid-cols-3">
      <?php foreach ($rest as $item): ?>
        <article class="card reveal group flex flex-col p-7 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg">
          <span class="icon-tile border border-gold/20 bg-gold/10 text-gold-deep transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
            <i class="bi <?= e($item['icon']) ?>" aria-hidden="true"></i>
          </span>
          <h3 class="mt-5 font-display text-lg font-bold leading-snug text-foreground"><?= e($item['title']) ?></h3>
          <p class="mt-2 text-sm font-light leading-relaxed text-muted-foreground"><?= e($item['desc']) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
