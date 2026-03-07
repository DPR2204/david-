"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const games = [
  {
    href: "/juegos/crucigrama",
    title: "Crucigrama",
    description: "Temática del lago y gastronomía guatemalteca.",
    cta: "Jugar esta semana »",
    icon: "crossword" as const,
  },
  {
    href: "/juegos/totito",
    title: "Totito",
    description: "El clásico. Reta a la máquina.",
    cta: "Jugar »",
    icon: "tictactoe" as const,
  },
  {
    href: "/juegos/wordle",
    title: "Wordle del Lago",
    description: "Adivina la palabra del día. Temática Atitlán.",
    cta: "Jugar hoy »",
    icon: "wordle" as const,
  },
  {
    href: "/juegos/sopa",
    title: "Sopa de Letras",
    description: "Encuentra las palabras escondidas del ecosistema.",
    cta: "Jugar esta semana »",
    icon: "wordsearch" as const,
  },
];

function CrosswordIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full text-ink">
      <rect x="5" y="5" width="20" height="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
      <rect x="25" y="5" width="20" height="20" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <rect x="45" y="5" width="20" height="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
      <rect x="5" y="25" width="20" height="20" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <rect x="25" y="25" width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="1" />
      <rect x="45" y="25" width="20" height="20" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <rect x="5" y="45" width="20" height="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
      <rect x="25" y="45" width="20" height="20" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <rect x="45" y="45" width="20" height="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function TicTacToeIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full text-ink">
      <line x1="27" y1="5" x2="27" y2="75" stroke="currentColor" strokeWidth="2" />
      <line x1="53" y1="5" x2="53" y2="75" stroke="currentColor" strokeWidth="2" />
      <line x1="5" y1="27" x2="75" y2="27" stroke="currentColor" strokeWidth="2" />
      <line x1="5" y1="53" x2="75" y2="53" stroke="currentColor" strokeWidth="2" />
      <line x1="33" y1="33" x2="47" y2="47" stroke="#C53A2A" strokeWidth="2.5" />
      <line x1="47" y1="33" x2="33" y2="47" stroke="#C53A2A" strokeWidth="2.5" />
      <circle cx="14" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function WordleIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-1">
      {["A", "T", "I"].map((letter, i) => (
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center text-paper font-mono text-sm font-bold rounded-sm ${
            i === 1 ? "bg-red" : "bg-ink/70"
          }`}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

function WordSearchIcon() {
  const letters = ["C", "A", "F", "É", "L", "A", "G", "O", "P", "A", "N", "·", "V", "I", "D", "A"];
  const highlighted = [0, 1, 2, 3, 5, 6, 8, 9, 10];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-4 gap-0.5">
        {letters.map((l, i) => (
          <span
            key={i}
            className={`w-4 h-4 flex items-center justify-center text-[0.5rem] font-mono ${
              highlighted.includes(i) ? "text-ink" : "text-grey/30"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

const iconMap = {
  crossword: CrosswordIcon,
  tictactoe: TicTacToeIcon,
  wordle: WordleIcon,
  wordsearch: WordSearchIcon,
};

export default function PuzzlesJuegos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 280;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(index, games.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  return (
    <section className="py-16 px-6 md:px-12 bg-paper border-t border-grey/20">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide max-w-5xl mx-auto"
      >
        {games.map((game, i) => {
          const Icon = iconMap[game.icon];
          return (
            <a
              key={i}
              href={game.href}
              className="snap-center shrink-0 w-[260px] md:w-[280px]"
            >
              <div className="bg-paper rounded-sm p-6 h-[320px] flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 mb-4">
                  <Icon />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  {game.title}
                </h3>
                <p className="font-body text-sm text-grey mb-4">
                  {game.description}
                </p>
                <span className="font-mono text-xs text-red">{game.cta}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {games.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeIndex ? "bg-ink" : "bg-grey/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
