import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import StatsRow from "@/components/ventures/StatsRow";
import DomainBlock from "@/components/ventures/DomainBlock";
import TechDomain from "@/components/ventures/TechDomain";
import Timeline from "@/components/ventures/Timeline";
import { domains, heroStats } from "@/lib/domains";

export const metadata = {
  title: "Ventures & Habilidades — David Rodas",
  description:
    "Proyectos, habilidades y áreas de dominio. Un ecosistema alrededor del Lago de Atitlán.",
};

export default function VenturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
      {/* ── Hero ── */}
      <ScrollReveal>
        <SectionLabel>Ventures &amp; Habilidades</SectionLabel>
        <div className="h-[2px] bg-ink mt-4 mb-8" />
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight max-w-2xl mb-6">
          Construyo ecosistemas.
          <br />
          No solo <em className="italic text-red">negocios</em>.
        </h1>
        <p className="font-body text-lg text-grey max-w-xl leading-relaxed">
          Gastronomía, tecnología, audiovisual, turismo, panadería, fe. Cada
          proyecto nace de una habilidad real y una obsesión concreta.
        </p>
        <StatsRow stats={heroStats} />
      </ScrollReveal>

      {/* ── Domain blocks ── */}
      {domains.map((domain) =>
        domain.techExpanded ? (
          <TechDomain key={domain.number} domain={domain} />
        ) : (
          <DomainBlock key={domain.number} domain={domain} />
        )
      )}

      {/* ── Timeline ── */}
      <ScrollReveal>
        <Timeline />
      </ScrollReveal>

      {/* ── Closing ── */}
      <ScrollReveal>
        <div className="bg-ink py-12 md:py-16 px-6 mt-12 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-paper/70 leading-relaxed max-w-md mx-auto mb-4">
            Desde las orillas del Lago de Atitlán, construyendo con las manos y
            con la mente.
          </p>
          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-wider text-grey hover:text-paper transition-colors"
          >
            Sobre mí →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
