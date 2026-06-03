<!-- FOOTER -->
<footer class="border-t border-border bg-background">
  <div class="shell py-16">
    <div class="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-12 md:gap-8">

      <!-- brand + credentials -->
      <div class="col-span-2 md:col-span-5">
        <img src="assets/images/logo.png" alt="<?= e($site['name']) ?>" width="300" height="125" class="h-9 w-auto">
        <p class="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/55">
          Building India's Bharat hospitality skilling infrastructure — the parent company behind Hotelwaley.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span class="badge gap-1.5 text-white/70">
            <i class="bi bi-patch-check-fill text-gold-light" aria-hidden="true"></i> DPIIT Recognised
          </span>
          <span class="badge gap-1.5 text-white/70">
            <i class="bi bi-trophy-fill text-gold-light" aria-hidden="true"></i> Elevate 2023 Winner
          </span>
        </div>
      </div>

      <!-- explore -->
      <nav class="md:col-span-3" aria-label="Footer">
        <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Explore</h2>
        <ul class="mt-5 space-y-3">
          <?php foreach ($nav_links as $link): ?>
            <li>
              <a href="<?= e($link['href']) ?>" class="text-sm text-white/55 transition-colors hover:text-gold-light">
                <?= e($link['label']) ?>
              </a>
            </li>
          <?php endforeach; ?>
          <li>
            <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
               class="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-gold-light">
              Hotelwaley <i class="bi bi-box-arrow-up-right text-xs" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>

      <!-- contact -->
      <div class="md:col-span-4">
        <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Get in touch</h2>
        <ul class="mt-5 space-y-4 text-sm text-white/55">
          <li>
            <a href="mailto:<?= e($site['email']) ?>" class="group inline-flex items-start gap-3 transition-colors hover:text-gold-light">
              <i class="bi bi-envelope mt-0.5 text-gold-light" aria-hidden="true"></i>
              <span><?= e($site['email']) ?></span>
            </a>
          </li>
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt mt-0.5 text-gold-light" aria-hidden="true"></i>
            <span class="font-light leading-relaxed"><?= e($site['address']) ?></span>
          </li>
          <li>
            <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
               class="inline-flex items-start gap-3 transition-colors hover:text-gold-light">
              <i class="bi bi-globe mt-0.5 text-gold-light" aria-hidden="true"></i>
              <span><?= e($site['platform_label']) ?></span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- bottom bar -->
    <div class="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
      <p>
        &copy; <?= e((string) $site['year']) ?> <?= e($site['name']) ?>.
        <span class="text-white/30">CIN: <?= e($site['cin']) ?></span>
      </p>
      <a href="#" id="backToTop" class="inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-gold-light">
        Back to top <i class="bi bi-arrow-up-short text-base" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
