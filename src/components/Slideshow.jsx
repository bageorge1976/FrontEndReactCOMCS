import React, { useState, useEffect } from "react";

// Local asset imports
import img1 from "../assets/biology.png";
import img2 from "../assets/MathCPSCFusion.png";
import img3 from "../assets/chemistry.png";
import img4 from "../assets/MathCPSCFusionChinese.png";
import img5 from "../assets/physics.png";

const IMAGES = [
  { src: img1, alt: "Evolution of Biology" },
  { src: img2, alt: "Math and Computer Science fusion" },
  { src: img3, alt: "Evolution of Chemistry" },
  { src: img4, alt: "Chinese Mathematical Legacy" },
  { src: img5, alt: "Evolution of Physics" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-250 mx-auto">
      <div 
        className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-xl border border-neutral-200 aspect-3/2"
      >
        {IMAGES.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === index 
                ? "opacity-100 scale-100 blur-none z-10" 
                : "opacity-0 scale-110 blur-2xl z-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover" 
            />
            
            {/* Brand gradient overlay using comcs-blue 
               The color is defined in your CSS theme
            */}
            <div className="absolute inset-0 bg-linear-to-t from-comcs-blue/30 to-transparent" />
          </div>
        ))}

        {/* Navigation Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === index 
                  ? "bg-white w-10 opacity-100" 
                  : "bg-white/50 w-3 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}