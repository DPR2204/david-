"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PhotoMosaic, { Photo } from "@/components/PhotoMosaic";
import { placeholderImages } from "@/lib/cloudinary";

const series = ["Todas", "El Lago", "Gastronomía", "Café", "AINUR", "Comunidades"];

const photos: Photo[] = [
  {
    src: placeholderImages.lake,
    alt: "Amanecer en el Lago de Atitlán",
    caption: "Amanecer sobre el Lago de Atitlán — Panajachel",
    series: "El Lago",
    size: "large",
  },
  {
    src: placeholderImages.food,
    alt: "Gastronomía local",
    caption: "Plato del día — Restaurantes Atitlán",
    series: "Gastronomía",
    size: "medium",
  },
  {
    src: placeholderImages.coffee,
    alt: "Café de especialidad",
    caption: "V60 en proceso — The Coffee Lab",
    series: "Café",
    size: "medium",
  },
  {
    src: placeholderImages.village,
    alt: "San Juan La Laguna",
    caption: "Calles de San Juan La Laguna",
    series: "Comunidades",
    size: "small",
  },
  {
    src: placeholderImages.volcano,
    alt: "Volcán San Pedro",
    caption: "Volcán San Pedro al atardecer",
    series: "El Lago",
    size: "medium",
  },
  {
    src: placeholderImages.film,
    alt: "Producción AINUR",
    caption: "Detrás de cámaras — AINUR Producción",
    series: "AINUR",
    size: "small",
  },
  {
    src: placeholderImages.market,
    alt: "Mercado de Sololá",
    caption: "Mercado de Sololá — Día de plaza",
    series: "Comunidades",
    size: "small",
  },
  {
    src: placeholderImages.bread,
    alt: "Pan artesanal",
    caption: "Croissants del día — Pan Nuestro",
    series: "Gastronomía",
    size: "medium",
  },
  {
    src: placeholderImages.landscape,
    alt: "Vista panorámica del lago",
    caption: "Tres volcanes — Vista desde San Marcos",
    series: "El Lago",
    size: "large",
  },
  {
    src: placeholderImages.restaurant,
    alt: "Interior del restaurante",
    caption: "Restaurante Atitlán — Panajachel",
    series: "Gastronomía",
    size: "small",
  },
  {
    src: placeholderImages.travel,
    alt: "Lancha en el lago",
    caption: "Cruzando el lago — Atitlán Experience",
    series: "El Lago",
    size: "medium",
  },
];

export default function VisualPage() {
  const [activeSeries, setActiveSeries] = useState("Todas");

  const filtered =
    activeSeries === "Todas"
      ? photos
      : photos.filter((p) => p.series === activeSeries);

  return (
    <div className="max-w-7xl mx-auto px-5 py-8 md:py-12">
      {/* Header */}
      <ScrollReveal>
        <SectionLabel>Visual</SectionLabel>
        <div className="h-[2px] bg-ink mt-4 mb-4" />
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-6">
          Desde el lago
        </h1>
      </ScrollReveal>

      {/* Filter pills */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-8">
          {series.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSeries(s)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-sm transition-colors ${
                activeSeries === s
                  ? "bg-ink text-paper"
                  : "text-grey hover:text-ink border border-surface"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Mosaic */}
      <PhotoMosaic photos={filtered} />

      {/* AINUR section */}
      <ScrollReveal>
        <section className="mt-16">
          <SectionLabel>AINUR Producción</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-6" />
          <div className="relative h-[280px] md:h-[400px] bg-ink rounded-sm overflow-hidden flex items-center justify-center">
            {/* Scanline texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
              }}
            />
            <div className="relative text-center px-8">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-paper mb-4">
                Narrativas del lago
              </h2>
              <p className="font-body text-base text-white/70 max-w-lg mx-auto">
                Producción audiovisual que captura las historias, paisajes y comunidades del Lago de
                Atitlán. Un proyecto junto a Kris.
              </p>
              <div className="w-12 h-[3px] bg-red mx-auto mt-6" />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
