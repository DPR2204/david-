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
      <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-6">
            Lake Atitlán, Guatemala — Desde 1960
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6">
            Construyendo desde el lago.
          </h1>
          <p className="font-body text-lg md:text-xl text-grey font-light max-w-2xl leading-relaxed">
            Un ecosistema de proyectos, pensamiento y escritura desde las orillas del Lago de
            Atitlán. Gastronomía, café, producción audiovisual y filosofía — todo conectado.
          </p>
          <div className="w-[50px] h-[3px] bg-red mt-8" />
        </ScrollReveal>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-5 pb-16">
          <ScrollReveal>
            <div className="border-t-[2px] border-ink pt-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-sm bg-ink">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center leading-tight">
                      {featuredPost.title}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <SectionLabel>{featuredPost.status || "Obra en progreso"}</SectionLabel>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-3 mb-4 leading-tight">
                    <Link
                      href={`/escritura/${featuredPost.slug}`}
                      className="hover:text-red transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="font-body text-base text-grey leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <p className="font-mono text-xs text-grey uppercase tracking-wider">
                    {featuredPost.category} · {featuredPost.date}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Ventures strip */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <SectionLabel>Ventures</SectionLabel>
                <h2 className="font-serif text-2xl font-bold text-ink mt-2">El ecosistema</h2>
              </div>
              <Link
                href="/ventures"
                className="font-mono text-xs uppercase tracking-wider text-grey hover:text-ink transition-colors"
              >
                Ver todos &#8599;
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12">
              {ventures.map((venture) => (
                <VentureCard key={venture.name} venture={venture} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo hero */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src={placeholderImages.lake}
          alt="Lago de Atitlán"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <p className="font-mono text-xs text-white/80 uppercase tracking-wider">
            Lago de Atitlán, Sololá
          </p>
        </div>
      </section>

      {/* Latest essay */}
      {latestEssay && (
        <section className="max-w-3xl mx-auto px-5 py-16 md:py-24">
          <ScrollReveal>
            <SectionLabel>Último ensayo</SectionLabel>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-3 mb-6">
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
              className="inline-block font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors mt-6"
            >
              Leer completo &#8599;
            </Link>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
