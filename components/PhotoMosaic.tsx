"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  series: string;
  size: "large" | "medium" | "small";
}

interface PhotoMosaicProps {
  photos: Photo[];
}

export default function PhotoMosaic({ photos }: PhotoMosaicProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-3">
        {photos.map((photo, i) => {
          const spanClass =
            photo.size === "large"
              ? "col-span-4 md:col-span-7 row-span-2"
              : photo.size === "medium"
              ? "col-span-2 md:col-span-5 row-span-1"
              : "col-span-2 md:col-span-4 row-span-1";

          const heightClass =
            photo.size === "large"
              ? "h-[300px] md:h-[450px]"
              : photo.size === "medium"
              ? "h-[200px] md:h-[280px]"
              : "h-[180px] md:h-[220px]";

          const isIllustration = photo.src.endsWith(".svg");

          return (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden rounded-sm ${spanClass} ${heightClass}`}
            >
              {isIllustration ? (
                <div className="absolute inset-0 bg-surface flex items-center justify-center p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="max-h-full max-w-full illustration-mono opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-xs text-white">{photo.caption}</p>
              </div>
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
