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
    <footer className="bg-ink">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Logo */}
        <p className="font-serif text-lg font-normal text-paper mb-6">David Rodas</p>

        {/* Coordinates */}
        <p className="font-mono text-xs text-grey/40 mb-8">
          Lago de Atitlán, Guatemala · 14°44&prime;N 91°12&prime;W
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-grey hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 pt-6 border-t border-grey/20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-grey hover:text-paper transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hola@davidrodas.com"
            className="font-mono text-xs uppercase tracking-[0.15em] text-grey hover:text-paper transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-grey hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-grey/40">
          &copy; {new Date().getFullYear()} David Rodas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
