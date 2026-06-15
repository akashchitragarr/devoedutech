'use client';

import { useEffect, useRef } from 'react';
import { stats } from '@/lib/content';

/**
 * Gas-pump style counter: the numeric core of a value ("40M+", "₹18L", "4.2M",
 * "2026") rolls up fast then decelerates into its final value.
 */
function countUp(el: HTMLElement) {
  const raw = el.getAttribute('data-count') || el.textContent || '';
  const prefix = (raw.match(/^[^\d.]*/) || [''])[0];
  const suffix = (raw.match(/[^\d.]*$/) || [''])[0];
  const numStr = raw.slice(prefix.length, raw.length - suffix.length);
  const target = parseFloat(numStr);
  if (isNaN(target)) return; // non-numeric → leave untouched
  const dot = numStr.indexOf('.');
  const decimals = dot === -1 ? 0 : numStr.length - dot - 1;
  const duration = 2400;
  let start: number | null = null;

  el.textContent = prefix + (0).toFixed(decimals) + suffix; // avoid flash of final value
  function frame(ts: number) {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
    if (p < 1) window.requestAnimationFrame(frame);
    else el.textContent = prefix + target.toFixed(decimals) + suffix;
  }
  window.requestAnimationFrame(frame);
}

export default function Stats() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const counters = root.querySelectorAll<HTMLElement>('[data-count]');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!counters.length || !('IntersectionObserver' in window) || reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Key figures" className="border-y border-border bg-secondary/40">
      <div className="shell py-10">
        <dl ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal flex flex-col gap-1">
              <dt className="order-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd
                className="order-1 font-display text-3xl font-bold leading-none text-gold-light tabular-nums md:text-4xl"
                data-count={stat.number}
              >
                {stat.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
