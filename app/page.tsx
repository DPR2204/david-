import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ElMixCarousel from "@/components/ElMixCarousel";
import SectionDivider from "@/components/SectionDivider";
import QueEstoyLeyendo from "@/components/QueEstoyLeyendo";
import PuzzlesJuegos from "@/components/PuzzlesJuegos";
import LifestyleCard from "@/components/LifestyleCard";
import { ventures } from "@/lib/ventures";
import { getAllPosts } from "@/lib/mdx";
import { siteImages } from "@/lib/cloudinary";

export default function HomePage() {
  const escrituraPosts = getAllPosts("escritura").slice(0, 6);
  const lifestylePosts = getAllPosts("lifestyle").slice(0, 3);

  return (
    <div>
      {/* Block 1: Hero with real photo */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden -mt-[105px]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.heroMain}
            alt="David Rodas"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16 max-w-5xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/70 mb-4 animate-fade-in">
            Lake Atitlán &middot; 14&deg;44&apos;N 91&deg;12&apos;W &middot; Desde 1960
          </span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-paper leading-[0.95] mb-6">
            Construyendo<br />desde el lago.
          </h1>

          <p className="font-body text-lg md:text-xl text-paper/70 max-w-lg leading-relaxed">
            Un ecosistema de proyectos, pensamiento y escritura desde las orillas del Lago de Atitlán.
          </p>

          <div className="w-12 h-[3px] bg-red mt-6" />
        </div>
      </section>

      {/* Block 2: Pullquote from Manifiesto */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-paper">
        <ScrollReveal>
          <blockquote className="max-w-6xl mx-auto">
            <p className="font-body italic text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ink text-center">
              &ldquo;La Tierra no necesita más ciudadanos de naciones. Necesita habitantes conscientes de un planeta.&rdquo;
            </p>
            <cite className="block text-center mt-6 font-mono text-xs uppercase tracking-[0.2em] text-grey not-italic">
              Manifiesto Terrícola
            </cite>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Block 3: Carrusel "El Mix" */}
      <ElMixCarousel />

      {/* Block 4: Ventures mosaic */}
      <section className="px-6 md:px-12 py-16 bg-paper">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto mb-10">
            <SectionLabel>Ventures</SectionLabel>
            <div className="flex items-baseline justify-between mt-2">
              <h2 className="font-serif text-3xl md:text-4xl font-normal">El ecosistema</h2>
              <Link
                href="/ventures"
                className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors"
              >
                Ver todos ↗
              </Link>
            </div>
            <div className="h-[2px] bg-ink mt-4" />
          </div>

          <div
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            style={{ gridTemplateRows: "repeat(2, 200px) 280px", gridAutoRows: "280px" }}
          >
            {ventures.map((v, i) => {
              const isHero = i === 0;
              const isStacked = i === 1 || i === 2;
              return (
                <Link
                  key={v.slug}
                  href={`/ventures/${v.slug}`}
                  className={`
                    relative overflow-hidden rounded-sm group cursor-pointer
                    ${isHero ? "col-span-2 md:col-span-2 md:row-span-2" : ""}
                    ${isStacked ? "col-span-1" : ""}
                    ${!isHero && !isStacked ? "col-span-1" : ""}
                  `}
                >
                  {v.image ? (
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes={isHero ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-ink">
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                        }}
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <span className="font-mono text-[0.5rem] md:text-[0.55rem] uppercase tracking-wider text-paper/60 block mb-1">
                      {v.tag}
                    </span>
                    <h3 className="font-serif text-lg md:text-2xl font-normal text-paper leading-tight">
                      {v.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Block 5: Intermediate hero photo — visual pause after Ventures */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: '21/9' }}>
        <Image
          src={siteImages.kitchen}
          alt="En la cocina"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute bottom-4 right-6">
          <span className="font-mono text-[0.5rem] uppercase tracking-wider text-paper/50">
            Restaurantes Atitlán &middot; Panajachel
          </span>
        </div>
      </section>

      {/* Block 6: Section divider — Escritura */}
      <SectionDivider
        image="/illustrations/divider-escritura.png"
        title="Escritura"
        subtitle="Ensayos, ideas y exploraciones"
      />

      {/* Block 7: Escritura — dynamic grid from MDX */}
      <section className="py-16 md:py-24 px-6 bg-paper">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
              {escrituraPosts.map((post) => (
                <Link key={post.slug} href={`/escritura/${post.slug}`} className="group block">
                  {post.image && (
                    <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-red">
                    {post.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-ink mt-1 mb-2 group-hover:text-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-grey leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/escritura"
                className="font-mono text-xs uppercase tracking-widest text-ink hover:text-red transition-colors"
              >
                Ver todos los escritos →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Block 8: Section divider — Qué estoy leyendo */}
      <SectionDivider
        image="/illustrations/divider-libros.png"
        title="Qué estoy leyendo"
        subtitle="Libros, artículos e ideas en mi radar"
      />

      {/* Block 9: Qué estoy leyendo */}
      <QueEstoyLeyendo />

      {/* Block 10: Section divider — Lifestyle */}
      <SectionDivider
        image="/illustrations/divider-lifestyle.png"
        title="Lifestyle"
        subtitle="Gastronomía, café y vida en el lago"
      />

      {/* Block 11: Lifestyle teaser */}
      <section className="py-16 px-6 md:px-12 bg-paper">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-3">
              {lifestylePosts.map((post) => (
                <LifestyleCard
                  key={post.slug}
                  post={{
                    slug: post.slug,
                    title: post.title,
                    category: post.category,
                    image: post.image || siteImages.davidMedium,
                    excerpt: post.excerpt,
                  }}
                  size="small"
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/lifestyle"
                className="font-mono text-xs uppercase tracking-widest text-ink hover:text-red transition-colors"
              >
                Explorar lifestyle →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Block 12: Ahora */}
      <section className="py-16 px-6 md:px-12 bg-surface">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="shrink-0">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-red block mb-2">Ahora</span>
                <p className="font-serif text-4xl md:text-5xl font-normal text-ink leading-none">Febrero</p>
                <p className="font-serif text-4xl md:text-5xl font-normal text-grey/40 leading-none">2026</p>
              </div>

              <div className="flex-1">
                <div className="h-[2px] bg-ink mb-8 md:mt-2" />
                <div className="grid grid-cols-1 gap-y-5">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl font-normal text-red/30 leading-none mt-0.5">&rarr;</span>
                    <p className="font-body text-base text-ink">
                      Abriendo <strong>Pan Nuestro</strong> — la panadería artesanal en Atitlán
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl font-normal text-red/30 leading-none mt-0.5">&rarr;</span>
                    <p className="font-body text-base text-ink">
                      Escribiendo el <strong>Manifiesto Terrícola</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl font-normal text-red/30 leading-none mt-0.5">&rarr;</span>
                    <p className="font-body text-base text-ink">
                      Diseñando la <strong>carta de cócteles</strong> para la temporada
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl font-normal text-red/30 leading-none mt-0.5">&rarr;</span>
                    <p className="font-body text-base text-ink">
                      Construyendo sistemas de <strong>automatización</strong> con IA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Block 13: Section divider — Puzzles & Juegos */}
      <SectionDivider
        image="/illustrations/divider-juegos.png"
        title="Puzzles & Juegos"
        subtitle="Tomate un descanso y jugá"
      />

      {/* Block 14: Puzzles & Juegos */}
      <PuzzlesJuegos />

      {/* Block 15: Editorial closing */}
      <section className="bg-ink py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8">
            <Image
              src={siteImages.aboutBW}
              alt="David Rodas"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <p className="font-body italic text-xl md:text-2xl text-paper/80 leading-relaxed mb-6">
            Desde las orillas del Lago de Atitlán, construyendo con las manos y con la mente.
          </p>
          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-widest text-grey hover:text-paper transition-colors"
          >
            Sobre mí →
          </Link>
        </div>
      </section>
    </div>
  );
}
