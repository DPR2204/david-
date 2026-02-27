import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Ventures", href: "/ventures" },
  { label: "Escritura", href: "/escritura" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Visual", href: "/visual" },
  { label: "Sobre mí", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface bg-paper">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Rule */}
        <div className="h-[2px] bg-ink mb-8" />

        {/* Logo */}
        <p className="font-serif text-lg font-bold text-ink mb-6">David Rodas</p>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-grey hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-grey">
            Lake Atitlán, Guatemala
          </p>
          <p className="font-mono text-xs text-grey">
            &copy; {new Date().getFullYear()} David Rodas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
