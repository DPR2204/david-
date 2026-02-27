import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import WritingItem from "@/components/WritingItem";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Escritura — David Rodas",
  description: "Ensayos, filosofía y narrativa desde el Lago de Atitlán.",
};

export default function EscrituraPage() {
  const posts = getAllPosts("escritura");
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
      {/* Featured piece — Manifiesto Terrícola */}
      {featured && (
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pb-10 border-b border-surface">
            {/* Visual poster */}
            <div className="relative aspect-[4/5] md:aspect-[4/3] bg-ink rounded-sm overflow-hidden flex items-center justify-center">
              {/* Scanline texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                }}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              {/* Content */}
              <div className="relative text-center px-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-4">
                  {featured.category}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-paper leading-tight">
                  Manifiesto<br />Terrícola
                </h2>
                <div className="w-12 h-[3px] bg-red mx-auto mt-6" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <SectionLabel>{featured.status || "Obra en progreso"}</SectionLabel>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-3 mb-3 leading-tight">
                <Link href={`/escritura/${featured.slug}`} className="hover:text-red transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="font-body text-base text-grey leading-relaxed mb-3">
                {featured.excerpt}
              </p>
              <p className="font-mono text-xs text-grey uppercase tracking-wider mb-4">
                {featured.category} · {featured.date}
              </p>
              <Link
                href={`/escritura/${featured.slug}`}
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors group"
              >
                Leer{" "}
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  {"\u2197\uFE0E"}
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Essay list */}
      <div className="mt-8">
        <ScrollReveal>
          <SectionLabel>Ensayos</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-2" />
        </ScrollReveal>

        {rest.map((post, i) => (
          <ScrollReveal key={post.slug}>
            <WritingItem
              post={{
                slug: post.slug,
                number: String(i + 1).padStart(2, "0"),
                title: post.title,
                category: post.category,
                date: post.date,
                excerpt: post.excerpt,
              }}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
