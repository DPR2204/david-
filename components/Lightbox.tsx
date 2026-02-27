"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "./PhotoMosaic";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onNavigate }: LightboxProps) {
  const photo = photos[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <X size={28} />
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={36} />
      </button>

      <div className="relative w-full h-full max-w-5xl max-h-[85vh] mx-8">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-mono text-sm text-white/80">{photo.caption}</p>
        <p className="font-mono text-xs text-white/40 mt-1">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
}
