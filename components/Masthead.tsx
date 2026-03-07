"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";

const tabs = [
  { label: "Inicio", href: "/" },
  { label: "Ventures", href: "/ventures" },
  { label: "Escritura", href: "/escritura" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Visual", href: "/visual" },
  { label: "Sobre mí", href: "/about" },
];

export default function Masthead() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      // Transition after scrolling past ~80vh of the hero
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-paper"
      }`}
    >
      {/* Level 1 - Logo */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="w-10" />
        <Link
          href="/"
          className={`font-serif text-xl font-normal tracking-tight transition-colors duration-300 ${
            transparent ? "text-paper" : "text-ink"
          }`}
        >
          David Rodas
        </Link>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className={`w-10 flex justify-end transition-colors duration-300 ${
            transparent
              ? "text-paper/70 hover:text-paper"
              : "text-grey hover:text-ink"
          }`}
          aria-label={searchOpen ? "Cerrar búsqueda" : "Buscar"}
        >
          {searchOpen ? <X size={20} /> : <Search size={20} />}
        </button>
      </div>

      {/* Search bar (expandable) */}
      {searchOpen && (
        <div className="px-5 pb-3">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-surface border-0 px-4 py-2 font-mono text-xs text-ink placeholder:text-grey focus:outline-none focus:ring-1 focus:ring-red rounded-sm"
            autoFocus
          />
        </div>
      )}

      {/* Level 2 - Section tabs */}
      <nav
        className={`border-b transition-colors duration-300 ${
          transparent ? "border-paper/20" : "border-surface"
        }`}
      >
        <div className="flex overflow-x-auto scrollbar-hide px-5 gap-7">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`whitespace-nowrap pb-3 pt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors duration-300 border-b-[3px] ${
                isActive(tab.href)
                  ? transparent
                    ? "text-paper border-paper"
                    : "text-ink border-ink"
                  : transparent
                    ? "text-paper/60 border-transparent hover:text-paper"
                    : "text-grey border-transparent hover:text-ink"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
