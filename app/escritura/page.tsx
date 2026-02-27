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
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Featured piece — Manifiesto Terrícola */}
      {featured && (
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 border-b border-surface">
            {/* Visual poster */}
            <div className="relative h-[350px] md:h-[450px] bg-ink rounded-sm overflow-hidden flex items-center justify-center p-10">
              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-6">
                  {featured.category}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                  {featured.title}
                </h2>
                <div className="w-[50px] h-[3px] bg-red mx-auto mt-6" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <SectionLabel>{featured.status || "Obra en progreso"}</SectionLabel>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-3 mb-4 leading-tight">
                <Link href={`/escritura/${featured.slug}`} className="hover:text-red transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="font-body text-base text-grey leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <p className="font-mono text-xs text-grey uppercase tracking-wider">
                {featured.category} · {featured.date}
              </p>
              <Link
                href={`/escritura/${featured.slug}`}
                className="inline-block font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors mt-6"
              >
                Leer &#8599;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Essay list */}
      <div className="mt-12">
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
