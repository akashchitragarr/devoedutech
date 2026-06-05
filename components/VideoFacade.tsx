'use client';

import { useState } from 'react';

type VideoFacadeProps = {
  src: string;
  poster: string;
  label: string;
  /** Smaller play button for the language cards. */
  size?: 'lg' | 'sm';
  /** Optional native-script language chip shown over the poster. */
  chip?: string;
};

/**
 * Click-to-load self-hosted video facade: shows a poster + play button, and
 * only mounts the <video> (autoplay, controls) once the user clicks.
 * Ported from the [data-video-src] handler in the original main.js.
 */
export default function VideoFacade({ src, poster, label, size = 'lg', chip }: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        className="h-full w-full object-cover"
        src={src}
        controls
        autoPlay
        playsInline
        controlsList="nodownload"
      />
    );
  }

  const ring = size === 'lg' ? 'h-16 w-16 md:h-20 md:w-20' : 'h-14 w-14';
  const icon = size === 'lg' ? 'text-3xl md:text-4xl ml-1' : 'text-2xl ml-0.5';

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${label}`}
      className="group/play relative block h-full w-full cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
      />
      <span
        className={
          size === 'lg'
            ? 'absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 transition-colors group-hover/play:from-black/40'
            : 'absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 transition-colors group-hover/play:from-black/45'
        }
      />
      {chip && (
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/55 px-3 py-1 font-display text-sm font-bold text-white backdrop-blur-sm">
          {chip}
        </span>
      )}
      <span className="absolute inset-0 grid place-items-center">
        <span
          className={`grid ${ring} place-items-center rounded-full bg-primary/90 text-white shadow-xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110`}
        >
          <i className={`bi bi-play-fill ${icon}`} aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
