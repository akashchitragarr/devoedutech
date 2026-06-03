<!-- WHAT WE DO -->
<section id="about" class="section">
  <div class="shell">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">

      <!-- left: sticky intro -->
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <p class="eyebrow reveal">What We Do</p>
          <h2 class="section-title reveal">One company. <em>One mission.</em></h2>
          <p class="section-lead reveal">
            <?= e($site['name']) ?> is a DPIIT-recognised startup incorporated in 2022, building the
            hospitality skilling infrastructure India has needed for decades. Our operating brand
            Hotelwaley delivers practical, mobile-first, multilingual training to frontline
            hospitality workers across Tier 2 and Tier 3 India.
          </p>

          <!-- mini proof points -->
          <dl class="reveal mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            <div class="bg-card px-5 py-4">
              <dt class="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Languages</dt>
              <dd class="mt-1 font-display text-2xl font-bold text-gold-light">7</dd>
            </div>
            <div class="bg-card px-5 py-4">
              <dt class="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Workers</dt>
              <dd class="mt-1 font-display text-2xl font-bold text-gold-light">40M+</dd>
            </div>
          </dl>

          <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
             class="reveal btn btn-primary btn-lg mt-7">
            Visit Hotelwaley <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <!-- right: numbered feature rows -->
      <div class="reveal lg:col-span-7">
        <ul class="divide-y divide-border">
          <?php foreach ($what_we_do as $i => $card): ?>
            <li class="group flex items-start gap-4 py-7 first:pt-0 last:pb-0 sm:gap-6">
              <!-- index -->
              <span class="hidden shrink-0 pt-1 font-display text-base font-bold tabular-nums text-gold-light/40 transition-colors group-hover:text-gold-light sm:block" aria-hidden="true">
                <?= sprintf('%02d', $i + 1) ?>
              </span>

              <!-- icon -->
              <span class="icon-tile shrink-0 border border-gold/20 bg-gold/10 text-gold-light transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-background">
                <i class="bi <?= e($card['icon']) ?>" aria-hidden="true"></i>
              </span>

              <!-- body -->
              <div class="min-w-0">
                <h3 class="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-gold-light md:text-xl">
                  <?= e($card['title']) ?>
                </h3>
                <p class="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">
                  <?= e($card['text']) ?>
                </p>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>

    </div>
  </div>
</section>
