<!-- NAV -->
<nav id="siteNav"
     class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300">
  <div class="shell flex h-16 items-center justify-between">
    <!-- brand -->
    <a href="#" class="flex items-center gap-2.5" aria-label="<?= e($site['name']) ?> — home">
      <img src="assets/images/logo.png" alt="" width="300" height="125" class="h-7 w-auto md:h-8">
      <span class="hidden flex-col border-l border-white/20 pl-2.5 text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-gold-light sm:flex">
        <span>Edutech</span>
        <span>Pvt Ltd</span>
      </span>
    </a>

    <!-- desktop links -->
    <div class="hidden items-center gap-1 lg:flex">
      <?php foreach ($nav_links as $link): ?>
        <a href="<?= e($link['href']) ?>" data-spy="<?= e(ltrim($link['href'], '#')) ?>"
           class="nav-link relative px-3 py-2 text-sm text-white/65 transition-colors hover:text-white">
          <?= e($link['label']) ?>
        </a>
      <?php endforeach; ?>
      <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
         class="btn btn-primary btn-sm ml-3">
        Visit Hotelwaley
      </a>
    </div>

    <!-- mobile toggle -->
    <button type="button" id="navToggle" aria-controls="navMenu" aria-expanded="false"
            aria-label="Toggle navigation"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white lg:hidden">
      <i class="bi bi-list" aria-hidden="true"></i>
    </button>
  </div>

  <!-- mobile menu -->
  <div id="navMenu" class="hidden border-t border-border bg-background lg:hidden">
    <div class="shell flex flex-col py-3">
      <?php foreach ($nav_links as $link): ?>
        <a href="<?= e($link['href']) ?>" data-spy="<?= e(ltrim($link['href'], '#')) ?>"
           class="nav-link border-b border-border/60 py-3 text-[15px] text-white/75 transition-colors hover:text-white">
          <?= e($link['label']) ?>
        </a>
      <?php endforeach; ?>
      <a href="<?= e($site['platform']) ?>" target="_blank" rel="noopener"
         class="btn btn-primary mt-4 w-full">
        Visit Hotelwaley
      </a>
    </div>
  </div>
</nav>
