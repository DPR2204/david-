import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
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
      {/* Featured piece */}
      {featured && (
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pb-10 border-b border-surface">
            <Link href={`/escritura/${featured.slug}`} className="group">
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-sm overflow-hidden">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-ink flex items-center justify-center">
                    <h2 className="font-serif text-3xl font-bold text-paper text-center px-8">
                      {featured.title}
                    </h2>
                  </div>
                )}
              </div>
            </Link>

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
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Essay list with thumbnails */}
      <div className="mt-8">
        <ScrollReveal>
          <SectionLabel>Ensayos</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-2" />
        </ScrollReveal>

        {rest.map((post, i) => (
          <ScrollReveal key={post.slug}>
            <Link
              href={`/escritura/${post.slug}`}
              className="group flex items-center gap-5 py-5 border-b border-surface hover:pl-2 transition-all"
            >
              {post.image && (
                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-grey/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-ink group-hover:text-red transition-colors leading-tight truncate">
                    {post.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-grey mt-1 line-clamp-1 hidden md:block">
                  {post.excerpt}
                </p>
              </div>
              <span className="font-mono text-xs text-grey/40 hidden md:block uppercase tracking-wider shrink-0">
                {post.category}
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
