import ScrollReveal from "@/components/ScrollReveal";
import VentureChip from "./VentureChip";
import type { Domain } from "@/lib/domains";
import { getVentureBySlug } from "@/lib/domains";

export default function DomainBlock({ domain }: { domain: Domain }) {
  const resolvedVentures = (domain.ventureChips ?? [])
    .map(getVentureBySlug)
    .filter(Boolean);

  return (
    <section className="pt-10 pb-6 border-t-2 border-ink">
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 mb-6">
          {/* Faded number */}
          <span className="font-serif text-[5rem] md:text-[6rem] font-normal leading-none text-ink/[0.06] select-none">
            {domain.number}
          </span>

          <div>
            <h2 className="font-serif text-xl md:text-2xl font-normal text-ink mb-2">
              {domain.title}
            </h2>
            <p className="font-body text-sm md:text-base text-grey leading-relaxed max-w-xl">
              {domain.description}
            </p>

            {/* Training */}
            {domain.training && domain.training.length > 0 && (
              <div className="mt-5 p-4 bg-surface">
                <p className="font-mono text-[0.5rem] uppercase tracking-wider text-grey mb-3">
                  Formación
                </p>
                <div className="space-y-1">
                  {domain.training.map((item, i) => (
                    <p
                      key={i}
                      className="font-mono text-[0.6rem] text-grey/70 leading-relaxed py-1 border-b border-ink/[0.04] last:border-b-0"
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Venture chips */}
      {resolvedVentures.length > 0 && (
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-3 mt-2">
            {resolvedVentures.map((venture) => (
              <VentureChip key={venture!.slug} venture={venture!} />
            ))}
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
