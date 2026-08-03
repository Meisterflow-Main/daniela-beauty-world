import { useRef, useEffect, useState } from "react";

/**
 * Einzelne Video-Reel-Karte.
 * - Lazy-Loading: erstes Video sofort, Rest über IntersectionObserver mit rootMargin.
 * - Autoplay: jedes Video eigener IntersectionObserver (Desktop >=60% Play, <30% Pause;
 *   Mobile >=60% Play, <30% Pause — in einem Slider ist so praktisch nur die stärkste
 *   Karte aktiv).
 * - prefers-reduced-motion: kein Autoplay, Poster/Standbild bleibt stehen.
 */
export default function ReelVideo({ src, title, index, isMobile, poster }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(index === 0);

  // 1) Lazy-Load aller Videos ausser dem ersten
  useEffect(() => {
    if (index === 0) {
      setShouldLoad(true);
      return;
    }
    const node = videoRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "500px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [index]);

  // 2) Autoplay-Logik
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const playSafe = () => {
      if (video.readyState >= 1) {
        video.play().catch(() => {});
      } else {
        const onReady = () => {
          video.play().catch(() => {});
          video.removeEventListener("loadedmetadata", onReady);
        };
        video.addEventListener("loadedmetadata", onReady);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const ratio = e.intersectionRatio;
          const playThreshold = isMobile ? 0.6 : 0.6;
          const pauseThreshold = isMobile ? 0.3 : 0.3;
          if (ratio >= playThreshold) {
            playSafe();
          } else if (ratio < pauseThreshold) {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, [shouldLoad, isMobile]);

  return (
    <article className="shrink-0 w-[230px] sm:w-[250px] md:w-[260px] snap-start">
      <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-soft bg-rose-cream group">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          defaultMuted
          playsInline
          loop
          preload={index === 0 ? "auto" : "none"}
          src={shouldLoad ? src : undefined}
          data-src={src}
          poster={poster}
          aria-label={title}
          tabIndex={-1}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 pt-10 bg-gradient-to-t from-rose-ink/85 via-rose-ink/30 to-transparent">
          <p className="text-white text-sm font-heading font-medium leading-snug">
            {title}
          </p>
        </div>
      </div>
    </article>
  );
}