import { Mail } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import DropCap from "@/components/DropCap";
import { siteImages } from "@/lib/cloudinary";

export const metadata = {
  title: "Sobre mí — David Rodas",
  description: "David Rodas. 24 años. Desde el Lago de Atitlán, Guatemala.",
};

const dataGrid = [
  { label: "Base", value: "Lago de Atitlán, Sololá, Guatemala" },
  { label: "Formación", value: "Administración Hotelera y Gastronomía — URL, Quetzaltenango" },
  { label: "Leyendo", value: "Ciencia ficción · Dune, Asimov" },
  { label: "Causas", value: "World Central Kitchen · UNICEF" },
];

const formacion = [
  {
    category: "Educación universitaria",
    items: [
      {
        title: "Administración Hotelera y Gastronomía",
        detail: "Universidad Rafael Landívar, Campus Quetzaltenango",
      },
    ],
  },
  {
    category: "Gastronomía y repostería",
    items: [
      {
        title: "Bollería Francesa y Pan de Masa Madre",
        detail:
          "Masterclass con Chef Daniel Balderas y Chef Pura de Briz · Alimentos Excelentes · Guatemala, 2023",
      },
      {
        title: "Pasteles Fríos Vendibles",
        detail:
          "Taller con Chef Pura de Briz y Chef Paula de Gutiérrez · Alimentos Excelentes · 2023",
      },
      {
        title: "Grageas y Confitería",
        detail: "Curso con Matías Dragun",
      },
      {
        title: "Postres de Vitrina",
        detail: "Curso con Matías Dragun",
      },
      {
        title: "Diplomado de Repostería",
        detail: "",
      },
      {
        title: "Helados de Vanguardia",
        detail: "Scoolinary · 2021",
      },
      {
        title: "Master Class Cervezas",
        detail: "Gato Dumas Online · Instructor: Habib Rabbat · 2021",
      },
    ],
  },
  {
    category: "Mixología",
    items: [
      {
        title: "Curso de Mixología",
        detail: "Wareke, Universidad Francisco Marroquín · Instructor: Raúl Cojolón",
      },
    ],
  },
  {
    category: "Negocios y protocolo",
    items: [
      {
        title: "Protocolo y Etiqueta: Claves de Imagen y Valor",
        detail: "Universidad Rafael Landívar + Panamerican Business School (PBS) · 2021",
      },
    ],
  },
  {
    category: "Pensamiento político y ciudadano",
    items: [
      {
        title: "Estado, Política y Democracia en América Latina",
        detail:
          "ELAG · En asociación con New School University (EEUU), Universidade do Estado do Rio de Janeiro (Brasil), y Grupo de Puebla · 45 horas · 2021",
      },
      {
        title: "Políticas Públicas para la Transformación Social Global en la Era Pospandémica",
        detail: "UNAM (PUEDJS) · Seminario Internacional Virtual · 2020",
      },
      {
        title: "Hacia una Nueva Cartilla Ético-Política",
        detail: "Escuela Nacional de Formación Política (ENFP) · 2020",
      },
      {
        title: "Programa de Formación Ciudadana",
        detail: "Movimiento Cívico Nacional (MCN) · 2024",
      },
    ],
  },
];

const idiomas = [
  { lang: "Español", level: "Nativo" },
  { lang: "Inglés", level: "Medio-avanzado" },
  { lang: "Francés", level: "Básico" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── Epígrafe ── */}
      <section className="max-w-3xl mx-auto px-5 pt-12 md:pt-20 pb-10">
        <ScrollReveal>
          <SectionLabel>Sobre mí</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-10" />
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] italic text-ink leading-[1.3]">
            &ldquo;La Tierra no necesita más ciudadanos de naciones. Necesita habitantes
            conscientes de un planeta.&rdquo;
          </blockquote>
          <p className="font-mono text-xs text-grey uppercase tracking-wider mt-5">
            — Manifiesto Terrícola
          </p>
          <div className="w-12 h-[3px] bg-red mt-8" />
        </ScrollReveal>
      </section>

      {/* ── Foto editorial ── */}
      <section className="max-w-3xl mx-auto px-5 py-8">
        <ScrollReveal>
          <div className="relative aspect-[3/2] rounded-sm overflow-hidden">
            <Image
              src={siteImages.aboutBW}
              alt="David Rodas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Bio ── */}
      <section className="max-w-3xl mx-auto px-5 py-10 md:py-14">
        <ScrollReveal>
          <DropCap>
            Tengo veinticuatro años y administro un ecosistema de negocios que mi familia empezó a
            construir en 1960, cuando abrimos el primer restaurante a orillas del Lago de Atitlán.
            Desde entonces, tres generaciones han servido comida en Panajachel, San Juan y Santiago.
            Yo soy el que está intentando llevar eso más lejos — no solo en escala, sino en
            intención.
          </DropCap>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body text-lg leading-[1.8] text-ink mt-6">
            Estudié Administración Hotelera y Gastronomía en la Universidad Rafael Landívar en
            Quetzaltenango. Ahí encontré la estructura formal para algo que ya sabía hacer por
            instinto: operar cocinas, pensar en servicio, y entender que la hospitalidad es un
            sistema, no un gesto. Después me especialicé en lo que más me interesaba: repostería,
            bollería francesa, masas laminadas, masa madre, y mixología — diseño cartas de cócteles
            para nuestros restaurantes y para terceros, y creo recetas como &ldquo;Tierra de
            Humo&rdquo;: mezcal, jamaica, jarabe y tintura de chile cobanero.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body text-lg leading-[1.8] text-ink mt-6">
            Gran parte de mi día la paso en el laboratorio de repostería. Pero la formación que más
            me ha marcado no tiene diploma. Soy autodidacta en tecnología, desarrollo web, y en
            inteligencia artificial. Lo digo así: yo soy el arquitecto y la IA son mis albañiles.
            Diseño la arquitectura de sistemas completos — sitios web, plataformas de gestión,
            automatización de servicio al cliente — y uso herramientas de IA como copiloto para
            construirlos. No lo hago por moda — lo hago porque un negocio familiar en Guatemala no
            tiene el lujo de contratar departamentos de tecnología. Entonces aprendes, o te quedas
            atrás.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body text-lg leading-[1.8] text-ink mt-6">
            Hoy dirijo seis proyectos simultáneos y sirvo como vicepresidente de la Asociación de
            Restaurantes y Comedores de Panajachel. Tengo sesenta personas en el ecosistema, veinte
            que reportan directamente a mí, y bajo mi responsabilidad caen todas las cocinas, toda
            la infraestructura tecnológica, el marketing, y las redes sociales de cada proyecto.
            También sigo de cerca los mercados financieros globales — desde el S&amp;P 500 hasta el
            Bovespa, el VIX, y los metales preciosos — porque creo que entender la economía macro
            es parte de administrar cualquier negocio con visión de largo plazo.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body text-lg leading-[1.8] text-ink mt-6">
            Escribo porque pensar en voz alta me ayuda a entender lo que hago y por qué. El
            Manifiesto Terrícola es mi intento de articular algo que siento desde hace tiempo: que la
            identidad planetaria — no la nacional, no la religiosa — es el único punto de partida
            ético que tiene sentido en este momento de la historia. Es una obra en progreso, como
            todo lo demás.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body text-lg leading-[1.8] text-ink mt-6">
            Dono mensualmente a World Central Kitchen y a UNICEF. No porque sea generoso, sino
            porque me parece la posición mínima coherente con lo que escribo.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Datos (2×2 grid) ── */}
      <section className="max-w-3xl mx-auto px-5 py-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-8 border-t border-b border-ink/10">
            {dataGrid.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-grey mb-1">
                  {item.label}
                </p>
                <p className="font-body text-sm text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Formación ── */}
      <section className="max-w-3xl mx-auto px-5 py-10 md:py-14">
        <ScrollReveal>
          <SectionLabel>Formación</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-10" />
        </ScrollReveal>

        <div className="space-y-10">
          {formacion.map((group) => (
            <ScrollReveal key={group.category}>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-red mb-4">
                  {group.category}
                </p>
                <div className="h-px bg-red/20 mb-5" />
                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-ink/10">
                      <p className="font-body text-base font-medium text-ink">{item.title}</p>
                      {item.detail && (
                        <p className="font-body text-sm text-grey mt-0.5">{item.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Filosofía ── */}
      <section className="bg-surface">
        <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">
          <ScrollReveal>
            <SectionLabel>Filosofía</SectionLabel>
            <div className="h-[2px] bg-ink mt-4 mb-8" />
            <p className="font-body text-lg leading-[1.8] text-ink">
              Creo en la optimización como filosofía — no como obsesión por la eficiencia, sino como
              respeto por los recursos y el tiempo. Visto solo negro porque una decisión menos por
              día es energía que va a otra parte. Automatizo lo que se puede automatizar para dedicar
              atención humana a lo que la requiere. Y escribo sobre identidad planetaria porque creo
              que es la única escala desde la que los problemas que importan tienen solución.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Idiomas ── */}
      <section className="max-w-3xl mx-auto px-5 py-10">
        <ScrollReveal>
          <SectionLabel>Idiomas</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-6" />
          <div className="flex flex-wrap gap-6">
            {idiomas.map((item) => (
              <div key={item.lang}>
                <p className="font-body text-base font-medium text-ink">{item.lang}</p>
                <p className="font-mono text-xs text-grey uppercase tracking-wider">{item.level}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Cargos institucionales ── */}
      <section className="max-w-3xl mx-auto px-5 py-8">
        <ScrollReveal>
          <SectionLabel>Cargos</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-6" />
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-ink/10">
              <p className="font-body text-base font-medium text-ink">Vicepresidente</p>
              <p className="font-body text-sm text-grey mt-0.5">
                Asociación de Restaurantes y Comedores de Panajachel
              </p>
            </div>
            <div className="pl-4 border-l-2 border-ink/10">
              <p className="font-body text-base font-medium text-ink">Miembro del Consejo</p>
              <p className="font-body text-sm text-grey mt-0.5">
                Ecosistema de negocios familiar
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Impacto comunitario (nota sutil) ── */}
      <section className="max-w-3xl mx-auto px-5 py-8">
        <ScrollReveal>
          <div className="space-y-1.5">
            <p className="font-mono text-xs text-grey leading-relaxed">
              Donación de silla de ruedas a la Oficina Municipal de Discapacidad de Panajachel —
              reconocido por la Municipalidad, febrero 2026.
            </p>
            <p className="font-mono text-xs text-grey leading-relaxed">
              Donaciones mensuales a World Central Kitchen y UNICEF.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Contacto ── */}
      <section className="max-w-3xl mx-auto px-5 pt-6 pb-16 md:pb-24">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wider text-grey mb-4">Contacto</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:david@atitlanrestaurantes.com"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-ink hover:text-red transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
