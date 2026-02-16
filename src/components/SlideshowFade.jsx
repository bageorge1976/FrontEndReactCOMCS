import { useEffect, useState } from "react";

export default function SlideshowFade({
  images,
  interval = 4000,
  autoplay = true,
  className = "",       // control overall size here
  aspect = "3/2",       // "3/2" for 600x400, or "16/9", "4/3"
}) {
  const [index, setIndex] = useState(0);
  const count = images?.length ?? 0;

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, count]);

  if (!count) return null;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  const aspectClass =
    aspect === "16/9"
      ? "aspect-[16/9]"
      : aspect === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[3/2]"; // default

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || ""}
            className={[
              "absolute inset-0 h-full w-full object-cover",
              "transition-opacity duration-700 ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
            draggable={false}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white px-3 py-1.5 hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white px-3 py-1.5 hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {count > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-white" : "bg-white/45 hover:bg-white/70",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}