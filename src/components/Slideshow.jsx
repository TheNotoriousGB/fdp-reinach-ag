import React, { useEffect, useState } from "react";
import { getGalleryImages } from "./getGallery";

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getGalleryImages().then(setImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return <p className="text-center">Lade Bilder...</p>;

  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-lg bg-white my-8 mb-16 pb-4">
      {/* Bilder */}
      {images.map((img, i) => {
        const baseUrl = img.asset.url.split("?")[0];
        return (
          <img
            key={img.asset._id}
            src={`${baseUrl}?w=1600&auto=format`}
            alt={`Bild ${i + 1}`}
            loading="lazy"
            className={`absolute top-0 left-0 w-full h-full object-contain object-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            srcSet={`
              ${baseUrl}?w=800&auto=format 800w,
              ${baseUrl}?w=1200&auto=format 1200w,
              ${baseUrl}?w=1600&auto=format 1600w,
              ${baseUrl}?w=2400&auto=format 2400w
            `}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        );
      })}

      {/* Navigationspunkte */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
