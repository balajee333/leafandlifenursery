"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  alt: string;
  compact?: boolean;
}

export default function ProductImageCarousel({ images, alt, compact = false }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = images.length > 0 ? images : [""];
  const hasMultiple = slides.length > 1;

  const padding = compact ? "p-3" : "p-8";
  const buttonSize = compact ? "h-8 w-8" : "h-10 w-10";
  const buttonTextSize = compact ? "text-xl" : "text-2xl";
  const dotSize = compact ? "h-2 w-2" : "h-2.5 w-2.5";

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  const handleDotClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    event.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative aspect-square">
          <Image
            src={slides[activeIndex]}
            alt={`${alt} (${activeIndex + 1} of ${slides.length})`}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-contain ${padding}`}
          />
        </div>

        {hasMultiple ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={handlePrev}
              className={`absolute left-3 top-1/2 z-10 inline-flex ${buttonSize} -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-green shadow-sm transition hover:bg-white ${buttonTextSize}`}
            >
              <span className="leading-none">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={handleNext}
              className={`absolute right-3 top-1/2 z-10 inline-flex ${buttonSize} -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-green shadow-sm transition hover:bg-white ${buttonTextSize}`}
            >
              <span className="leading-none">›</span>
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View image ${index + 1}`}
              onClick={(event) => handleDotClick(event, index)}
              className={`${dotSize} rounded-full transition ${
                index === activeIndex ? "bg-brand-green" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
