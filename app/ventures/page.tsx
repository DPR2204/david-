import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/lib/ventures";

export const metadata = {
  title: "Ventures — David Rodas",
  description: "Un ecosistema de proyectos alrededor del Lago de Atitlán.",
};

export default function VenturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Intro editorial */}
      <ScrollReveal>
        <SectionLabel>Proyectos &amp; Ventures</SectionLabel>
        <div className="h-[2px] bg-ink mt-4 mb-6" />
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-4">
          Un ecosistema alrededor del Lago de Atitlán
        </h1>
        <p className="font-body text-lg text-grey max-w-2xl leading-relaxed mb-12">
          Desde gastronomía con seis décadas de historia hasta café de especialidad, producción
          audiovisual y turismo consciente. Cada proyecto es una pieza del mismo rompecabezas.
        </p>
      </ScrollReveal>

      {/* Venture cards grid */}
      <div className="grid md:grid-cols-2 gap-x-12">
        {ventures.map((venture, i) => (
          <ScrollReveal key={venture.name}>
            <VentureCard venture={venture} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
