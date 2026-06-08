'use client';

import { useEffect, useRef, useState } from 'react';
import { site, news } from '@/lib/content';

/** Image with a shimmer skeleton that clears once the file actually loads. */
function Thumb({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // If the image was already cached, onLoad may never fire after hydration.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <span className="skeleton absolute inset-0" aria-hidden="true" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}

export default function News() {
  if (news.length === 0) return null;

  const [feature, ...rest] = news;

  return (
    <section id="news" className="section section-light">
      <div className="shell">
        <p className="eyebrow reveal text-gold-deep">In the News</p>
        <h2 className="section-title reveal text-foreground">
          {site.brand} in the <em className="text-gold-deep">Press</em>
        </h2>
        <p className="section-lead reveal">
          Coverage of Ajay Handa and the mission to build India&apos;s first vernacular hospitality skilling
          infrastructure.
        </p>

        {/* featured article */}
        <a
          href={feature.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card reveal group mt-12 grid overflow-hidden transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg md:grid-cols-2"
        >
          <div className="relative aspect-16/10 overflow-hidden bg-secondary md:aspect-auto">
            <Thumb src={feature.image} alt={feature.title} width={1200} height={798} />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="badge gap-1.5 border-gold/30 bg-gold/10 text-gold-deep">
                <i className="bi bi-newspaper" aria-hidden="true" /> {feature.source}
              </span>
              <span>{feature.date}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
              {feature.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep">
              Read full article
              <i
                className="bi bi-arrow-up-right transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </a>

        {/* further coverage */}
        {rest.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {rest.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card reveal group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-secondary">
                  <Thumb src={item.image} alt={item.title} width={1200} height={798} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="text-gold-deep">{item.source}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep">
                    Read article
                    <i
                      className="bi bi-arrow-up-right transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
