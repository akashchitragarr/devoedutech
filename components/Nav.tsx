'use client';

import { useEffect, useState } from 'react';
import { site, navLinks } from '@/lib/content';

const SOLID = ['bg-background/95', 'backdrop-blur', 'border-border', 'shadow-sm'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  // ── translucent → solid on scroll ──
  useEffect(() => {
    const nav = document.getElementById('siteNav');
    if (!nav) return;
    let ticking = false;
    const apply = () => {
      const on = window.scrollY > 40;
      SOLID.forEach((c) => nav.classList.toggle(c, on));
      nav.classList.toggle('border-transparent', !on);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(apply);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── scroll-spy: highlight the link for the section in view ──
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const ids = navLinks.map((l) => l.href.replace(/^#/, ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="siteNav"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300"
    >
      <div className="shell flex h-16 items-center justify-between">
        {/* brand */}
        <a href="#" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/logo.png" alt="" width={300} height={125} className="h-7 w-auto md:h-8" />
          <span className="hidden flex-col border-l border-white/20 pl-2.5 text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-gold-light sm:flex">
            <span>Edutech</span>
            <span>Pvt Ltd</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace(/^#/, '');
            return (
              <a
                key={link.href}
                href={link.href}
                data-spy={id}
                className={`nav-link relative px-3 py-2 text-sm text-white/65 transition-colors hover:text-white${
                  active === id ? ' active' : ''
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={site.platform}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm ml-3"
          >
            Visit Hotelwaley
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          id="navToggle"
          aria-controls="navMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white lg:hidden"
        >
          <i className={open ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true" />
        </button>
      </div>

      {/* mobile menu */}
      <div id="navMenu" className={`menu-collapse bg-background lg:hidden${open ? ' is-open' : ''}`}>
        <div>
          <div className="shell flex flex-col border-t border-border py-3">
            {navLinks.map((link) => {
              const id = link.href.replace(/^#/, '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-spy={id}
                  onClick={() => setOpen(false)}
                  className={`nav-link border-b border-border/60 py-3 text-[15px] text-white/75 transition-colors hover:text-white${
                    active === id ? ' active' : ''
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={site.platform}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 w-full"
            >
              Visit Hotelwaley
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
