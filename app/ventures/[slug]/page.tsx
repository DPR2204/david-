import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { ventures } from "@/lib/ventures";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const venture = ventures.find((v) => v.slug === slug);
  if (!venture) return { title: "Proyecto no encontrado" };
  return {
    title: `${venture.name} — David Rodas`,
    description: venture.description,
  };
}

export default async function VentureDetailPage({ params }: Props) {
  const { slug } = await params;
  const venture = ventures.find((v) => v.slug === slug);

  if (!venture) notFound();

  return (
    <div className="max-w-3xl mx-auto px-5 py-8 md:py-12">
      {/* Back link */}
      <ScrollReveal>
        <div className="mb-8">
          <Link
            href="/ventures"
            className="font-mono text-xs uppercase tracking-wider text-grey hover:text-ink transition-colors"
          >
            {"\u2190"} Ventures
          </Link>
        </div>
      </ScrollReveal>

      {/* Header */}
      <ScrollReveal>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-grey">{venture.year}</span>
            <span className="font-mono text-[0.55rem] uppercase tracking-wider text-red border border-red px-2.5 py-0.5 rounded-sm">
              {venture.tag}
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-wider text-grey border border-ink/10 px-2.5 py-0.5 rounded-sm">
              {venture.status}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-ink leading-tight mb-4">
            {venture.name}
          </h1>
          <div className="w-12 h-[3px] bg-red" />
        </header>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal>
        <div className="mb-10">
          <p className="font-body text-lg leading-[1.8] text-ink">
            {venture.description}
          </p>
          <p className="font-mono text-xs text-grey uppercase tracking-wider mt-4">
            {venture.type}
          </p>
        </div>
      </ScrollReveal>

      {/* External link */}
      {venture.url && (
        <ScrollReveal>
          <div className="py-6 border-t border-b border-ink/10 mb-10">
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink hover:text-red transition-colors group"
            >
              Visitar sitio
              <span className="text-grey/40 group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                {"\u2197\uFE0E"}
              </span>
            </a>
            <p className="font-mono text-xs text-grey mt-1">
              {venture.url.replace("https://", "")}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Footer */}
      <footer className="border-t border-surface pt-6">
        <Link
          href="/ventures"
          className="font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
        >
          {"\u2190"} Volver a Ventures
        </Link>
      </footer>
    </div>
  );
}
