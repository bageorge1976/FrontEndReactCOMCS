import { useEffect, useState } from "react";

export default function SlideshowCloudFade({
  images,
  interval = 4500,
  fadeMs = 1200,
  className = "",
  aspect = "3/2",
}) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const count = images?.length ?? 0;
  const aspectClass =
    aspect === "16/9"
      ? "aspect-[16/9]"
      : aspect === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[3/2]";

  useEffect(() => {
    if (count <= 1) return;

    const id = setInterval(() => {
      setPrevIndex(index);
      setIsTransitioning(true);
      setIndex((i) => (i + 1) % count);

      // end transition after fade time
      const t = setTimeout(() => setIsTransitioning(false), fadeMs);
      return () => clearTimeout(t);
    }, interval);

    return () => clearInterval(id);
  }, [count, interval, fadeMs, index]);

  if (!count) return null;

  const curr = images[index];
  const prev = images[prevIndex];

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        {/* Previous image (fades out, adds blur) */}
        {isTransitioning && (
          <img
            src={prev.src}
            alt={prev.alt || ""}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "scale(1)",
              transition: `opacity ${fadeMs}ms ease-in-out, filter ${fadeMs}ms ease-in-out, transform ${fadeMs}ms ease-in-out`,
            }}
          />
        )}

        {/* Current image (fades in, starts blurred then sharpens) */}
        <img
          src={curr.src}
          alt={curr.alt || ""}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: isTransitioning ? 0 : 1,
            filter: isTransitioning ? "blur(10px)" : "blur(0px)",
            transform: isTransitioning ? "scale(1.02)" : "scale(1)",
            transition: `opacity ${fadeMs}ms ease-in-out, filter ${fadeMs}ms ease-in-out, transform ${fadeMs}ms ease-in-out`,
          }}
          onLoad={() => {
            // when transition starts, immediately let the new image begin appearing
            if (isTransitioning) {
              requestAnimationFrame(() => {
                // flip to “in” state on next frame for smooth start
                // (we rely on styles above responding to isTransitioning)
              });
            }
          }}
        />

        {/* Optional "mist" overlay to enhance the cloudy dissolve */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isTransitioning ? 0.22 : 0,
            transition: `opacity ${fadeMs}ms ease-in-out`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.25), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}