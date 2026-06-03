<!-- CONTACT -->
<section id="contact" class="section section-light">
  <div class="shell">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">

      <!-- intro + direct contact -->
      <div class="lg:col-span-5">
        <p class="eyebrow reveal text-gold-deep">Get in Touch</p>
        <h2 class="section-title reveal text-foreground">
          Let's build <em class="text-gold-deep">Bharat Hospitality</em> together.
        </h2>
        <p class="section-lead reveal">
          Whether you run a property, lead an association, or back category-defining
          infrastructure — we'd love to hear from you.
        </p>

        <ul class="reveal mt-9 space-y-4">
          <li>
            <a href="mailto:<?= e($site['email']) ?>"
               class="group flex items-center gap-4 transition-colors">
              <span class="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                <i class="bi bi-envelope" aria-hidden="true"></i>
              </span>
              <span class="flex flex-col">
                <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Email</span>
                <span class="font-medium text-foreground transition-colors group-hover:text-gold-deep"><?= e($site['email']) ?></span>
              </span>
            </a>
          </li>
          <li>
            <span class="flex items-center gap-4">
              <span class="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                <i class="bi bi-geo-alt" aria-hidden="true"></i>
              </span>
              <span class="flex flex-col">
                <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Location</span>
                <span class="font-medium text-foreground"><?= e($site['location']) ?></span>
              </span>
            </span>
          </li>
          <li>
            <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
               class="group flex items-center gap-4 transition-colors">
              <span class="icon-tile shrink-0 border border-border bg-card text-gold-deep">
                <i class="bi bi-globe" aria-hidden="true"></i>
              </span>
              <span class="flex flex-col">
                <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Platform</span>
                <span class="font-medium text-foreground transition-colors group-hover:text-gold-deep"><?= e($site['platform_label']) ?></span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- audience cards as clickable rows -->
      <div class="lg:col-span-7">
        <div class="space-y-4">
          <?php foreach ($contacts as $card): ?>
            <?php $external = strpos($card['link'], 'mailto:') !== 0; ?>
            <a href="<?= e($card['link']) ?>" <?= $external ? 'target="_blank" rel="noopener"' : '' ?>
               class="card group flex items-center gap-5 p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg sm:p-7">
              <span class="icon-tile shrink-0 bg-background text-gold-deep">
                <i class="bi <?= e($card['icon']) ?>" aria-hidden="true"></i>
              </span>
              <span class="min-w-0 flex-1">
                <span class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep"><?= e($card['label']) ?></span>
                <span class="mt-1 block font-display text-lg font-bold text-foreground"><?= e($card['title']) ?></span>
                <span class="mt-1.5 block text-sm font-light leading-relaxed text-muted-foreground"><?= e($card['text']) ?></span>
                <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep">
                  <?= e($card['link_text']) ?>
                  <i class="bi bi-arrow-right transition-transform group-hover:translate-x-1" aria-hidden="true"></i>
                </span>
              </span>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
