import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import VentureCard from "@/components/VentureCard";
import DropCap from "@/components/DropCap";
import { ventures } from "@/lib/ventures";
import { getAllPosts } from "@/lib/mdx";
import { placeholderImages } from "@/lib/cloudinary";

export default function HomePage() {
  const escrituraPosts = getAllPosts("escritura");
  const featuredPost = escrituraPosts.find((p) => p.featured) || escrituraPosts[0];
  const latestEssay = escrituraPosts.find((p) => !p.featured) || escrituraPosts[1];

  return (
    <div>
      {/* Hero editorial */}
      <section className="max-w-4xl mx-auto px-5 pt-8 pb-12 md:pt-12 md:pb-16">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-4">
            Lake Atitlán, Guatemala — Desde 1960
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-4">
            Construyendo desde el lago.
          </h1>
          <p className="font-body text-lg md:text-xl text-grey font-light max-w-2xl leading-relaxed">
            Un ecosistema de proyectos, pensamiento y escritura desde las orillas del Lago de
            Atitlán. Gastronomía, café, producción audiovisual y filosofía — todo conectado.
          </p>
          <div className="w-12 h-[3px] bg-red mt-6" />
        </ScrollReveal>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-5 pb-12">
          <ScrollReveal>
            <div className="border-t-[2px] border-ink pt-6">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Poster editorial */}
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
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-4 block">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-paper leading-tight">
                      Manifiesto<br />Terrícola
                    </h2>
                    <div className="w-12 h-[3px] bg-red mx-auto mt-6" />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <SectionLabel>{featuredPost.status || "Obra en progreso"}</SectionLabel>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-3 mb-3 leading-tight">
                    <Link
                      href={`/escritura/${featuredPost.slug}`}
                      className="hover:text-red transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="font-body text-base text-grey leading-relaxed mb-3">
                    {featuredPost.excerpt}
                  </p>
                  <p className="font-mono text-xs text-grey uppercase tracking-wider mb-4">
                    {featuredPost.category} · {featuredPost.date}
                  </p>
                  <Link
                    href={`/escritura/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors group"
                  >
                    Leer{" "}
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      {"\u2197\uFE0E"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Ventures strip */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <div>
                <SectionLabel>Ventures</SectionLabel>
                <h2 className="font-serif text-2xl font-bold text-ink mt-2">El ecosistema</h2>
              </div>
              <Link
                href="/ventures"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-grey hover:text-ink transition-colors group"
              >
                Ver todos{" "}
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  {"\u2197\uFE0E"}
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-ink">
              {ventures.map((venture, i) => (
                <VentureCard key={venture.name} venture={venture} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo hero */}
      <section className="relative h-[350px] md:h-[500px] overflow-hidden">
        <Image
          src={placeholderImages.lake}
          alt="Lago de Atitlán"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-6 left-5">
          <p className="font-mono text-xs text-white/80 uppercase tracking-wider">
            Lago de Atitlán, Sololá
          </p>
        </div>
      </section>

      {/* Latest essay */}
      {latestEssay && (
        <section className="max-w-3xl mx-auto px-5 py-12 md:py-16">
          <ScrollReveal>
            <SectionLabel>Último ensayo</SectionLabel>
            <div className="h-[2px] bg-ink mt-4 mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              <Link
                href={`/escritura/${latestEssay.slug}`}
                className="hover:text-red transition-colors"
              >
                {latestEssay.title}
              </Link>
            </h2>
            <DropCap>{latestEssay.excerpt}</DropCap>
            <Link
              href={`/escritura/${latestEssay.slug}`}
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors mt-6 group"
            >
              Leer completo{" "}
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                {"\u2197\uFE0E"}
              </span>
            </Link>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
