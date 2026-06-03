<!-- STAT BAND -->
<section aria-label="Key figures" class="border-y border-border bg-secondary/40">
  <div class="shell py-10">
    <dl class="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
      <?php foreach ($stats as $stat): ?>
        <div class="reveal flex flex-col gap-1">
          <dt class="order-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
            <?= e($stat['label']) ?>
          </dt>
          <dd class="order-1 font-display text-3xl font-bold leading-none text-gold-light tabular-nums md:text-4xl"
              data-count="<?= e($stat['number']) ?>">
            <?= e($stat['number']) ?>
          </dd>
        </div>
      <?php endforeach; ?>
    </dl>
  </div>
</section>
