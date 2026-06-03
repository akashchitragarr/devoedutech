<!-- WHAT WE DO -->
<section id="about" class="section">
  <div class="shell">
    <p class="eyebrow reveal">What We Do</p>
    <h2 class="section-title reveal">One company. <em>One mission.</em></h2>
    <p class="section-lead reveal">
      <?= e($site['name']) ?> is a DPIIT-recognised startup incorporated in 2022, building the
      skilling infrastructure India's hospitality industry has needed for decades. Our operating
      brand Hotelwaley delivers practical, mobile-first, multilingual training to frontline
      hospitality workers across Tier 2 and Tier 3 India.
    </p>

    <div class="mt-12 grid gap-4 md:grid-cols-2">
      <?php foreach ($what_we_do as $i => $card): ?>
        <article class="card reveal group relative overflow-hidden p-7 hover:border-gold/50">
          <span class="absolute right-6 top-4 font-display text-5xl font-bold text-gold/10 transition-colors group-hover:text-gold/20">
            <?= sprintf('%02d', $i + 1) ?>
          </span>
          <span class="icon-tile bg-secondary text-gold-light">
            <i class="bi <?= e($card['icon']) ?>" aria-hidden="true"></i>
          </span>
          <h3 class="mt-5 font-display text-xl font-bold text-foreground"><?= e($card['title']) ?></h3>
          <p class="mt-3 text-sm font-light leading-relaxed text-muted-foreground"><?= e($card['text']) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
