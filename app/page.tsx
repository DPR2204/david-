import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ElMixCarousel from "@/components/ElMixCarousel";
import SectionDivider from "@/components/SectionDivider";
import QueEstoyLeyendo from "@/components/QueEstoyLeyendo";
import PuzzlesJuegos from "@/components/PuzzlesJuegos";
import { ventures } from "@/lib/ventures";
import { siteImages } from "@/lib/cloudinary";

export default function HomePage() {
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

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] mb-6">
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
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ink text-center">
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

      {/* Block 4: Ventures visual cards */}
      <section className="px-6 md:px-12 py-16 bg-paper">
        <ScrollReveal>
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
                {v.image ? (
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes={i === 0 || i === 4 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
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
                  <h3 className="font-serif text-lg md:text-2xl font-bold text-paper leading-tight">
                    {v.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Block 5: Section divider — Escritura */}
      <SectionDivider
        image="/illustrations/divider-escritura.png"
        title="Escritura"
        subtitle="Ensayos, ideas y exploraciones"
      />

      {/* Block 6: Intermediate hero photo — David y Rafa cocinando */}
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

      {/* Block 7: Escritura — New Yorker-style grid */}
      <section className="py-16 md:py-24 px-6 bg-paper">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
              {[
                {
                  slug: "manifiesto-terricola",
                  category: "FILOSOFÍA",
                  title: "Manifiesto Terrícola",
                  excerpt: "La Tierra no necesita más ciudadanos de naciones. Necesita habitantes conscientes de un planeta.",
                  image: "/images/blog/manifiesto-terricola.png",
                },
                {
                  slug: "responsabilidad-planetaria",
                  category: "FILOSOFÍA",
                  title: "Responsabilidad planetaria: por qué donar no es caridad",
                  excerpt: "Una reflexión sobre la diferencia entre caridad y responsabilidad en un mundo interconectado.",
                  image: "/images/blog/responsabilidad-planetaria.png",
                },
                {
                  slug: "del-grano-a-la-taza",
                  category: "TÉCNICO",
                  title: "Del grano a la taza: variables que importan",
                  excerpt: "Las variables que transforman un café ordinario en una experiencia sensorial.",
                  image: "/images/blog/del-grano-a-la-taza.png",
                },
                {
                  slug: "sesenta-anos-sirviendo-al-lago",
                  category: "NARRATIVA",
                  title: "Sesenta años sirviendo al lago",
                  excerpt: "Una historia familiar que empieza en 1960 y sigue viva en tres locaciones alrededor del Lago de Atitlán.",
                  image: "/images/blog/sesenta-anos-sirviendo-al-lago.png",
                },
                {
                  slug: "autodidactas-era-ia",
                  category: "TÉCNICO",
                  title: "Autodidactas en la era de la inteligencia artificial",
                  excerpt: "Aprender sin institución en un mundo donde la IA democratiza el conocimiento.",
                  image: "/images/blog/autodidactas-era-ia.png",
                },
                {
                  slug: "optimizacion-filosofia-de-vida",
                  category: "FILOSOFÍA",
                  title: "La optimización como filosofía de vida",
                  excerpt: "Tratar cada sistema como un problema de ingeniería con solución elegante.",
                  image: "/images/blog/optimizacion-filosofia-de-vida.png",
                },
              ].map((post) => (
                <Link key={post.slug} href={`/escritura/${post.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-opacity group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-red">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mt-1 mb-2 group-hover:text-red transition-colors">
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

      {/* Block 8: Qué estoy leyendo */}
      <QueEstoyLeyendo />

      {/* Block 8: Section divider — Qué estoy leyendo */}
      <SectionDivider
        image="/illustrations/divider-libros.png"
        title="Qué estoy leyendo"
        subtitle="Libros, artículos e ideas en mi radar"
      />

      {/* Block 9: Bloque "Ahora" */}
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

      {/* Block 10: Puzzles & Juegos */}
      <PuzzlesJuegos />

      {/* Block 11: Section divider — Puzzles & Juegos */}
      <SectionDivider
        image="/illustrations/divider-juegos.png"
        title="Puzzles & Juegos"
        subtitle="Tomate un descanso y jugá"
      />
    </div>
  );
}
