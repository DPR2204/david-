"use client";

import { useState, useEffect, useRef } from "react";
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
  const [visible, setVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Level 1 - Logo */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="w-10" />
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-ink">
          David Rodas
        </Link>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="w-10 flex justify-end text-grey hover:text-ink transition-colors"
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
      <nav className="border-b border-surface">
        <div className="flex overflow-x-auto scrollbar-hide px-5 gap-6">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`whitespace-nowrap pb-2.5 pt-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                isActive(tab.href)
                  ? "text-ink border-b-[3px] border-ink"
                  : "text-grey hover:text-ink"
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
