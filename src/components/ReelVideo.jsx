import { useRef, useEffect, useState } from "react";

/**
 * Einzelne Video-Reel-Karte.
 * - Lazy-Loading: erstes Video sofort, Rest über IntersectionObserver mit root=Slider-Track
 *   und rootMargin (Karten rechts/links ausserhalb des sichtbaren Slider-Bereichs laden erst kurz vor dem Erreichen).
 * - Autoplay: jedes Video eigener IntersectionObserver (>=60% sichtbar Play, <30% Pause).
 * - prefers-reduced-motion: kein Autoplay, Standbild/Poster bleibt stehen.
 */
export default function ReelVideo({ src, title, index, isMobile, rootRef, poster }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(index === 0);

  // Sobald ein Video geladen werden soll, Metadaten + erstes Frame laden
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (video && index !== 0) video.load();
  }, [shouldLoad, index]);

  // 1) Lazy-Load aller Videos ausser dem ersten — Root ist der Slider-Track
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
      { root: rootRef?.current ?? null, rootMargin: "500px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [index, rootRef]);

  // 2) Autoplay-Logik — Root ist der Slider-Track
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
          if (ratio >= 0.6) {
            playSafe();
          } else if (ratio < 0.3) {
            video.pause();
          }
        });
      },
      { root: rootRef?.current ?? null, threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, [shouldLoad, rootRef]);

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
          preload={shouldLoad ? "auto" : "none"}
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