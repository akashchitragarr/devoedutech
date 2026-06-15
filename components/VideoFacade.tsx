'use client';

import { useState } from 'react';

type VideoFacadeProps = {
  /** YouTube video id (the part after youtu.be/ or watch?v=). */
  youtubeId: string;
  label: string;
  /** Smaller play button for the language cards. */
  size?: 'lg' | 'sm';
  /** Optional native-script language chip shown over the poster. */
  chip?: string;
};

/**
 * Click-to-load YouTube facade: shows YouTube's own thumbnail + a play button,
 * and only mounts the privacy-friendly embed iframe (autoplay) once the user
 * clicks. Keeps the page fast — no YouTube scripts load until playback starts.
 */
export default function VideoFacade({ youtubeId, label, size = 'lg', chip }: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);
  // YouTube's own thumbnail. hqdefault always exists, so default to it (avoids a
  // wasted 404 when maxresdefault isn't generated). Once a video has the high-res
  // still, upgrade to it; if that 404s, drop back to hqdefault.
  const hqPoster = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const [poster, setPoster] = useState(hqPoster);

  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
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
        onError={() => setPoster(hqPoster)}
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
