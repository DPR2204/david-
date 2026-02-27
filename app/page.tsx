import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { ventures } from "@/lib/ventures";
import { getAllPosts } from "@/lib/mdx";
import { placeholderImages } from "@/lib/cloudinary";

export default function HomePage() {
  const escrituraPosts = getAllPosts("escritura");
  const featuredPost = escrituraPosts.find((p) => p.featured) || escrituraPosts[0];

  return (
    <div>
      {/* Block 1: Hero with background image */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden -mt-[105px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={placeholderImages.heroLake}
            alt="Lago de Atitlán"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16 max-w-5xl">
          {/* Dateline with fade-in animation */}
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/70 mb-4 animate-fade-in">
            Lake Atitlán &middot; 14&deg;44&apos;N 91&deg;12&apos;W &middot; Desde 1960
          </span>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] mb-6">
            Construyendo<br />desde el lago.
          </h1>

          {/* Deck */}
          <p className="font-body text-lg md:text-xl text-paper/70 max-w-lg leading-relaxed">
            Un ecosistema de proyectos, pensamiento y escritura desde las orillas del Lago de Atitlán.
          </p>

          {/* Red rule */}
          <div className="w-12 h-[3px] bg-red mt-6" />
        </div>
      </section>

      {/* Block 2: Pullquote from Manifiesto */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-paper">
        <ScrollReveal>
          <blockquote className="max-w-6xl mx-auto">
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ink text-center">
              &ldquo;La Tierra no necesita más ciudadanos de naciones. Necesita habitantes conscientes de un planeta.&rdquo;
            </p>
            <cite className="block text-center mt-6 font-mono text-xs uppercase tracking-[0.2em] text-grey not-italic">
              Manifiesto Terrícola
            </cite>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Block 3: Ventures visual cards */}
      <section className="px-6 md:px-12 py-16 bg-paper">
        <ScrollReveal>
          {/* Section header */}
          <div className="max-w-6xl mx-auto mb-10">
            <SectionLabel>Ventures</SectionLabel>
            <div className="flex items-baseline justify-between mt-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">El ecosistema</h2>
              <Link
                href="/ventures"
                className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors"
              >
                Ver todos ↗
              </Link>
            </div>
            <div className="h-[2px] bg-ink mt-4" />
          </div>

          {/* Visual grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {ventures.map((v, i) => (
              <Link
                key={v.slug}
                href={`/ventures/${v.slug}`}
                className={`
                  relative overflow-hidden rounded-sm group cursor-pointer
                  ${i === 0 || i === 4 ? "col-span-2 md:col-span-2 aspect-[16/9]" : "col-span-1 aspect-[4/5]"}
                `}
              >
                {/* Background image or dark placeholder */}
                {v.image ? (
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes={i === 0 || i === 4 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  />
                ) : (
                  <div className="absolute inset-0 bg-ink" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="font-mono text-[0.5rem] md:text-[0.55rem] uppercase tracking-wider text-paper/60 block mb-1">
                    {v.tag}
                  </span>
                  <h3 className="font-serif text-lg md:text-2xl font-bold text-paper leading-tight">
                    {v.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Block 4: Intermediate hero photo */}
      <section className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        <Image
          src={placeholderImages.kitchen}
          alt="Cocina Restaurantes Atitlán"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle caption in the corner */}
        <div className="absolute bottom-4 right-6">
          <span className="font-mono text-[0.5rem] uppercase tracking-wider text-paper/50">
            Restaurantes Atitlán &middot; Panajachel
          </span>
        </div>
      </section>

      {/* Block 5: Bloque "Ahora" */}
      <section className="py-16 px-6 md:px-12 bg-surface">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Ahora</SectionLabel>
            <div className="h-[2px] bg-ink mt-4 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-light text-red/30 leading-none mt-0.5">&rarr;</span>
                <p className="font-body text-base text-ink">
                  Abriendo <strong>Pan Nuestro</strong> — la panadería artesanal en Atitlán
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-light text-red/30 leading-none mt-0.5">&rarr;</span>
                <p className="font-body text-base text-ink">
                  Escribiendo el <strong>Manifiesto Terrícola</strong>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-light text-red/30 leading-none mt-0.5">&rarr;</span>
                <p className="font-body text-base text-ink">
                  Diseñando la <strong>carta de cócteles</strong> para la temporada
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-light text-red/30 leading-none mt-0.5">&rarr;</span>
                <p className="font-body text-base text-ink">
                  Construyendo sistemas de <strong>automatización</strong> con IA
                </p>
              </div>
            </div>

            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-grey mt-8">
              Última actualización: Febrero 2026
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Block 6: Latest article — Manifiesto teaser */}
      {featuredPost && (
        <section className="py-16 px-6 md:px-12 bg-paper">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <SectionLabel>Escritura</SectionLabel>
              <div className="h-[2px] bg-ink mt-4 mb-10" />

              <Link href={`/escritura/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Poster visual */}
                  <div className="relative aspect-[4/5] bg-ink rounded-sm overflow-hidden">
                    {/* Scanline texture */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.03]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                    <div className="relative h-full flex flex-col items-center justify-center px-8">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-4">
                        {featuredPost.category}
                      </span>
                      <h3 className="font-serif text-4xl md:text-5xl font-bold text-paper text-center leading-tight">
                        Manifiesto<br />Terrícola
                      </h3>
                      <div className="w-12 h-[3px] bg-red mt-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-red mb-3 block">
                      {featuredPost.status || "Obra en progreso"}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-red transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="font-body text-base text-grey leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <span className="font-mono text-xs text-grey mb-6 block">
                      {featuredPost.category} &middot; {featuredPost.date}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-red group-hover:text-ink transition-colors inline-flex items-center gap-1">
                      Leer{" "}
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
