"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const mixItems = [
  {
    href: "/lifestyle/gastronomia-de-atitlan",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=750&fit=crop",
    tag: "Mixología",
    title: "Tierra de Humo",
    excerpt: "La receta del cóctel insignia: mezcal, cítricos del altiplano y un toque ahumado que evoca los volcanes.",
  },
  {
    href: "/ventures/pan-nuestro",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=750&fit=crop",
    tag: "Panadería",
    title: "Masas laminadas en Atitlán",
    excerpt: "El proceso detrás de Pan Nuestro: croissants de mantequilla, fermentación lenta y el clima del lago.",
  },
  {
    href: "/escritura/manifiesto-terricola",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=750&fit=crop",
    tag: "Filosofía",
    title: "El Manifiesto Terrícola",
    excerpt: "Una exploración sobre identidad planetaria, ciudadanía consciente y el futuro de la humanidad.",
  },
  {
    href: "/lifestyle/el-ritual-del-cafe",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=750&fit=crop",
    tag: "Café",
    title: "Café de altura",
    excerpt: "Notas de cata del mejor grano de Sololá. Del cultivo a la taza, un viaje sensorial.",
  },
  {
    href: "/ventures/ainur",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=750&fit=crop",
    tag: "Audiovisual",
    title: "Narrativas del lago",
    excerpt: "Últimas producciones de AINUR: documentales, cortometrajes y contenido visual desde Atitlán.",
  },
  {
    href: "/ventures/atitlan-experience",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=750&fit=crop",
    tag: "Turismo",
    title: "El futuro del turismo en Atitlán",
    excerpt: "Modelo B2B/B2C para un turismo responsable que beneficia a las comunidades locales.",
  },
];

export default function ElMixCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = mixItems.length;

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(index, itemCount - 1));
  }, [itemCount]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 336;
    container.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-paper border-t border-grey/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className="font-serif text-2xl md:text-3xl text-center mb-10 tracking-wide uppercase"
          style={{ fontVariant: "small-caps" }}
        >
          El Mix
        </h2>
      </div>

      <div className="relative">
        {/* Navigation arrows (desktop) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-paper/90 rounded-full items-center justify-center shadow-sm hover:bg-paper transition-colors"
          aria-label="Anterior"
        >
          <span className="text-ink text-xl">‹</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-paper/90 rounded-full items-center justify-center shadow-sm hover:bg-paper transition-colors"
          aria-label="Siguiente"
        >
          <span className="text-ink text-xl">›</span>
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-4 scrollbar-hide"
        >
          {mixItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="snap-center shrink-0 w-[280px] md:w-[320px] group"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="320px"
                />
              </div>
              <span className="font-mono text-[0.55rem] uppercase tracking-wider text-red block mb-1">
                {item.tag}
              </span>
              <h3 className="font-serif text-lg leading-snug group-hover:text-red transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm text-grey mt-1 line-clamp-3">
                {item.excerpt}
              </p>
            </a>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {mixItems.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-ink" : "bg-grey/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
