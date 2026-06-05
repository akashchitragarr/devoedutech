(function () {
  'use strict';

  // ── Scroll reveal ──
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () { entry.target.classList.add('visible'); }, i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Stats: count-up when the band scrolls into view ──
  // Each value is split into prefix / number / suffix so "40M+", "₹18L",
  // "4.2M" and "2026" all animate the numeric core while keeping decorations.
  function countUp(el) {
    var raw = el.getAttribute('data-count') || el.textContent;
    var prefix = (raw.match(/^[^\d.]*/) || [''])[0];
    var suffix = (raw.match(/[^\d.]*$/) || [''])[0];
    var numStr = raw.slice(prefix.length, raw.length - suffix.length);
    var target = parseFloat(numStr);
    if (isNaN(target)) { return; } // non-numeric → leave untouched
    var dot = numStr.indexOf('.');
    var decimals = dot === -1 ? 0 : numStr.length - dot - 1;
    var duration = 2400;
    var start = null;

    el.textContent = prefix + (0).toFixed(decimals) + suffix; // avoid flash of final value
    function frame(ts) {
      if (start === null) { start = ts; }
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) { window.requestAnimationFrame(frame); }
      else { el.textContent = prefix + target.toFixed(decimals) + suffix; }
    }
    window.requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll('[data-count]');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { countObserver.observe(c); });
  }
  // No-JS / reduced-motion: the static value already rendered server-side stays put.

  // ── Back to top ──
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      var smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    });
  }

  // ── Click-to-load YouTube facade (loads the embed only on play) ──
  document.querySelectorAll('[data-yt-id]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.className = 'h-full w-full';
      iframe.title = btn.getAttribute('aria-label') || 'Video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.getAttribute('data-yt-id') + '?autoplay=1&rel=0';
      btn.replaceWith(iframe);
    });
  });

  // ── Click-to-load self-hosted video facade (poster → play on click) ──
  document.querySelectorAll('[data-video-src]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var video = document.createElement('video');
      video.className = 'h-full w-full object-cover';
      video.src = btn.getAttribute('data-video-src');
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.setAttribute('controlsList', 'nodownload');
      btn.replaceWith(video);
      video.play().catch(function () {});
    });
  });

  // ── Nav: translucent → solid on scroll ──
  var nav = document.getElementById('siteNav');
  if (nav) {
    var solid = ['bg-background/95', 'backdrop-blur', 'border-border', 'shadow-sm'];
    var ticking = false;
    var apply = function () {
      var on = window.scrollY > 40;
      solid.forEach(function (c) { nav.classList.toggle(c, on); });
      nav.classList.toggle('border-transparent', !on);
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
    }, { passive: true });
    apply();
  }

  // ── Mobile menu toggle ──
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    var icon = toggle.querySelector('i');
    var setOpen = function (open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (icon) { icon.className = open ? 'bi bi-x-lg' : 'bi bi-list'; }
    };
    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
  }

  // ── Scroll-spy: highlight nav link for section in view ──
  var spyLinks = document.querySelectorAll('.nav-link[data-spy]');
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var groups = {};
    spyLinks.forEach(function (link) {
      (groups[link.dataset.spy] = groups[link.dataset.spy] || []).push(link);
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spyLinks.forEach(function (l) { l.classList.remove('active'); });
          (groups[entry.target.id] || []).forEach(function (l) { l.classList.add('active'); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    Object.keys(groups).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) { spy.observe(section); }
    });
  }
})();
