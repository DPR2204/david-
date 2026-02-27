import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import DropCap from "@/components/DropCap";

export const metadata = {
  title: "Sobre mí — David Rodas",
  description: "David Rodas. 24 años. Desde el Lago de Atitlán, Guatemala.",
};

const dataGrid = [
  { label: "Base", value: "Lago de Atitlán, Guatemala" },
  { label: "Formación", value: "Admin Hotelera & Gastronomía — URL" },
  { label: "Lectura actual", value: "Ciencia ficción — Dune, Asimov" },
  { label: "Causas", value: "WCK & UNICEF" },
];

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-12">
          {/* Left column */}
          <ScrollReveal>
            <div>
              <SectionLabel>Sobre mí</SectionLabel>
              <div className="h-[2px] bg-ink mt-4 mb-6" />
              <div className="mt-6">
                <blockquote className="font-serif text-2xl md:text-3xl italic text-ink leading-snug">
                  &ldquo;La Tierra no necesita más ciudadanos de naciones. Necesita habitantes
                  conscientes de un planeta.&rdquo;
                </blockquote>
                <p className="font-mono text-xs text-grey uppercase tracking-wider mt-4">
                  — Manifiesto Terrícola
                </p>
              </div>
              <div className="w-12 h-[3px] bg-red mt-6" />
            </div>
          </ScrollReveal>

          {/* Right column */}
          <div>
            <ScrollReveal>
              {/* Bio */}
              <div className="mb-8">
                <DropCap>
                  David Rodas tiene 24 años y dirige un ecosistema de proyectos familiares desde las
                  orillas del Lago de Atitlán, Guatemala. Lo que comenzó con un restaurante en
                  Panajachel en 1960 se ha expandido a tres locaciones gastronómicas, una marca de
                  café de especialidad, una productora audiovisual y una panadería artesanal en
                  desarrollo.
                </DropCap>
                <p className="font-body text-lg leading-[1.8] text-ink mt-4">
                  Formado en administración hotelera y gastronomía en la Universidad Rafael
                  Landívar, complementó su educación con especialización en mixología y pastelería.
                  Autodidacta en tecnología, desarrollo web e inteligencia artificial, aplica una
                  filosofía de optimización constante a cada proyecto.
                </p>
                <p className="font-body text-lg leading-[1.8] text-ink mt-4">
                  Actualmente escribe el Manifiesto Terrícola — una obra sobre identidad planetaria
                  y ética post-teológica. Cree que la responsabilidad no es un deber impuesto, sino
                  una consecuencia natural de la conciencia. Lee ciencia ficción — Dune y Asimov —
                  y apoya las causas de World Central Kitchen y UNICEF.
                </p>
              </div>
            </ScrollReveal>

            {/* Data grid */}
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-t border-b border-ink/10">
                {dataGrid.map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-xs uppercase tracking-wider text-grey mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-grey mb-4">
                  Contacto
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:hola@davidrodas.com"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
