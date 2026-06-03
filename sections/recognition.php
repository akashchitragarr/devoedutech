<!-- RECOGNITION -->
<section id="recognition" class="section section-light">
  <div class="shell">
    <p class="eyebrow reveal text-gold-deep">Credentials</p>
    <h2 class="section-title reveal text-foreground">Trusted. Recognised. <em class="text-gold-deep">Verified.</em></h2>
    <p class="section-lead reveal">
      <?= e($site['brand']) ?>'s approach has been independently validated by India's most
      respected startup and industry bodies.
    </p>

    <div class="mt-12 grid gap-4 md:grid-cols-2">
      <?php foreach ($credentials as $item): ?>
        <article class="card reveal group relative overflow-hidden p-7 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg">
          <!-- hover accent -->
          <span class="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true"></span>

          <div class="flex items-start gap-5">
            <span class="icon-tile shrink-0 border border-gold/20 bg-gold/10 text-gold-deep">
              <i class="bi <?= e($item['icon']) ?>" aria-hidden="true"></i>
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-lg font-bold leading-snug text-foreground"><?= e($item['title']) ?></h3>
              <p class="mt-2 text-sm font-light leading-relaxed text-muted-foreground"><?= e($item['desc']) ?></p>
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
