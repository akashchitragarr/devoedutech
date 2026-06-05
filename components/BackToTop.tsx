'use client';

export default function BackToTop() {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  };
  return (
    <a
      href="#"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-gold-light"
    >
      Back to top <i className="bi bi-arrow-up-short text-base" aria-hidden="true" />
    </a>
  );
}
