import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/lib/ventures";

export const metadata = {
  title: "Ventures — David Rodas",
  description: "Un ecosistema de proyectos alrededor del Lago de Atitlán.",
};

const skills = [
  {
    category: "Gastronomía & Repostería",
    description:
      "Ejecutor profesional. Trabaja en laboratorio de repostería diariamente. Masas laminadas, bollería francesa, pan de masa madre, pasteles fríos, helados de vanguardia. Diseña cartas de cócteles y crea recetas originales.",
    training: [
      "Administración Hotelera y Gastronomía — Universidad Rafael Landívar, Quetzaltenango",
      "Bollería Francesa y Pan de Masa Madre — Chef Daniel Balderas, Alimentos Excelentes, 2023",
      "Pasteles Fríos Vendibles — Chef Pura de Briz, Alimentos Excelentes, 2023",
      "Grageas y Confitería — Matías Dragun",
      "Postres de Vitrina — Matías Dragun",
      "Diplomado de Repostería",
      "Helados de Vanguardia — Scoolinary, 2021",
      "Master Class Cervezas — Gato Dumas Online, 2021",
      "Mixología — Wareke, Universidad Francisco Marroquín, con Raúl Cojolón",
      "Protocolo y Etiqueta — URL + Panamerican Business School, 2021",
    ],
  },
  {
    category: "Tecnología & Desarrollo",
    description:
      "Autodidacta avanzado. Arquitecto de sistemas con IA como copiloto. Construye proyectos completos en Next.js, Supabase, Firebase, Google Cloud, Vercel, Resend. Ha desarrollado sistemas de gestión de empleados, turnos, automatización de servicio al cliente, plataformas de tours, y múltiples sitios web para el ecosistema.",
  },
  {
    category: "Ciberseguridad",
    description:
      "Postura de seguridad integral. Hardware (YubiKeys), software (suite Proton completa), y consciencia de ingeniería social. Seguridad no solo en código — también en el factor humano.",
  },
  {
    category: "Mercados & Macroeconomía",
    description:
      "Literacy financiera global. Sigue índices de EEUU (S&P 500, NASDAQ, Dow Jones), Europa (FTSE, DAX, STOXX, CAC 40), Asia (Nikkei, KOSPI), y Latinoamérica (Bovespa, MERVAL, IPC México). Monitorea VIX, Dollar Index, metales preciosos, y crypto. Visión macro para decisiones de negocio.",
  },
  {
    category: "Dirección & Operaciones",
    description:
      "60 personas en el ecosistema, 20 reportes directos. Vicepresidente de la Asociación de Restaurantes y Comedores de Panajachel. Responsable directo de cocinas, tecnología, marketing, y RRSS de todo el ecosistema.",
  },
  {
    category: "Producción Audiovisual",
    description:
      "Productor ejecutivo en AINUR. Ejecución operativa — logística, presupuesto, coordinación. Kris maneja dirección creativa y cámara.",
  },
  {
    category: "Pensamiento Político & Ciudadano",
    description:
      "Formación formal en política latinoamericana y ciudadanía activa.",
    training: [
      "Estado, Política y Democracia en América Latina — ELAG + New School University + Grupo de Puebla, 2021",
      "Transformación Social Global en la Era Pospandémica — UNAM (PUEDJS), 2020",
      "Nueva Cartilla Ético-Política — ENFP, 2020",
      "Formación Ciudadana — Movimiento Cívico Nacional, 2024",
    ],
  },
];

export default function VenturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
      {/* Intro editorial */}
      <ScrollReveal>
        <SectionLabel>Proyectos &amp; Ventures</SectionLabel>
        <div className="h-[2px] bg-ink mt-4 mb-6" />
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-3">
          Un ecosistema alrededor del Lago de Atitlán
        </h1>
        <p className="font-body text-lg text-grey max-w-2xl leading-relaxed mb-8">
          Desde gastronomía con seis décadas de historia hasta café de especialidad, producción
          audiovisual y turismo consciente. Cada proyecto es una pieza del mismo rompecabezas.
        </p>
      </ScrollReveal>

      {/* Venture cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-ink">
        {ventures.map((venture, i) => (
          <ScrollReveal key={venture.name}>
            <VentureCard venture={venture} index={i} />
          </ScrollReveal>
        ))}
      </div>

      {/* ── Toolkit / Skills ── */}
      <section className="mt-16 md:mt-24">
        <ScrollReveal>
          <SectionLabel>Habilidades</SectionLabel>
          <div className="h-[2px] bg-ink mt-4 mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-10">
            El toolkit detrás del ecosistema
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {skills.map((skill) => (
            <ScrollReveal key={skill.category}>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-red mb-3">
                  {skill.category}
                </p>
                <div className="h-px bg-red/20 mb-4" />
                <p className="font-body text-sm text-grey leading-relaxed">
                  {skill.description}
                </p>
                {skill.training && (
                  <div className="mt-4 space-y-2">
                    {skill.training.map((item, i) => (
                      <p key={i} className="font-mono text-xs text-grey/70 leading-relaxed pl-3 border-l border-ink/10">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
