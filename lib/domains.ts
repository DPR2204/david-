import { ventures, type Venture } from "./ventures";

// ── Types ──

export interface TrainingItem {
  text: string;
}

export interface WebsitePreview {
  name: string;
  url: string;
  description: string;
  accentColor: string;
}

export interface InternalSystem {
  name: string;
  description: string;
  icon: string;
}

export interface AutomationItem {
  label: string;
  name: string;
  description: string;
}

export interface TechExpanded {
  github: {
    handle: string;
    bio: string;
    repos: number;
    url: string;
  };
  websites: WebsitePreview[];
  internalSystems: InternalSystem[];
  automation: AutomationItem[];
  stack: string[];
}

export interface Domain {
  number: string;
  title: string;
  description: string;
  training?: TrainingItem[];
  ventureChips?: string[];
  techExpanded?: TechExpanded;
}

// ── Helper ──

export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}

// ── Hero stats ──

export const heroStats = [
  { value: "6", label: "Proyectos" },
  { value: "60", label: "Personas" },
  { value: "7", label: "Áreas de dominio" },
  { value: "1960", label: "Año de origen" },
];

// ── Timeline events ──

export const timelineEvents = [
  { year: "1960", name: "Restaurantes Atitlán", slug: "restaurantes-atitlan" },
  { year: "2022", name: "The Coffee Lab", slug: "the-coffee-lab" },
  { year: "2023", name: "AINUR", slug: "ainur" },
  { year: "2023", name: "Atitlán Experience", slug: "atitlan-experience" },
  { year: "2024", name: "Pan Nuestro", slug: "pan-nuestro" },
  { year: "2024", name: "Habitación", slug: "habitacion", isOpen: true },
];

// ── Domains ──

export const domains: Domain[] = [
  {
    number: "01",
    title: "Gastronomía & Repostería",
    description:
      "Ejecutor profesional. Trabaja en laboratorio de repostería diariamente. Masas laminadas, bollería francesa, pan de masa madre, pasteles fríos, helados de vanguardia. Diseña cartas de cócteles y crea recetas originales.",
    training: [
      { text: "Administración Hotelera y Gastronomía — Universidad Rafael Landívar, Quetzaltenango" },
      { text: "Bollería Francesa y Pan de Masa Madre — Chef Daniel Balderas, Alimentos Excelentes, 2023" },
      { text: "Pasteles Fríos Vendibles — Chef Pura de Briz, Alimentos Excelentes, 2023" },
      { text: "Grageas y Confitería — Matías Dragun" },
      { text: "Postres de Vitrina — Matías Dragun" },
      { text: "Diplomado de Repostería" },
      { text: "Helados de Vanguardia — Scoolinary, 2021" },
      { text: "Mixología — Wareke, Universidad Francisco Marroquín, con Raúl Cojolón" },
    ],
    ventureChips: ["restaurantes-atitlan", "the-coffee-lab", "pan-nuestro"],
  },
  {
    number: "02",
    title: "Tecnología & Desarrollo",
    description:
      "Arquitecto de sistemas con IA como copiloto. Diseña, construye y mantiene la infraestructura digital de todo el ecosistema — desde sitios web públicos hasta sistemas internos de gestión y automatización con inteligencia artificial.",
    techExpanded: {
      github: {
        handle: "DPR2204",
        bio: "From kitchen to code. Orchestrating chaos into systems that actually work.",
        repos: 15,
        url: "https://github.com/DPR2204",
      },
      websites: [
        { name: "Atitlán Experience", url: "https://atitlanexperience.com", description: "Plataforma de tours · B2B & B2C", accentColor: "#2D6A4F" },
        { name: "The Coffee Lab", url: "https://thecoffeelab.top", description: "Café de especialidad", accentColor: "#6B4423" },
        { name: "AINUR", url: "https://ainur.cam", description: "Producción audiovisual", accentColor: "#1A1A1A" },
        { name: "David Rodas", url: "https://davidrodas.com", description: "Sitio editorial personal", accentColor: "#C53A2A" },
        { name: "Fidelity App", url: "https://fidelityapp-seven.vercel.app", description: "Programa de lealtad", accentColor: "#B8860B" },
        { name: "Habitación", url: "https://habitacion.co", description: "Comunidad de fe", accentColor: "#1B4965" },
      ],
      internalSystems: [
        { name: "OmniPOS", description: "ERP & punto de venta multi-sucursal", icon: "POS" },
        { name: "Portal Colaboradores", description: "Turnos, nómina y gestión de personal", icon: "RH" },
        { name: "MermasPro", description: "Control profesional de mermas de inventario", icon: "INV" },
        { name: "Pan Nuestro ERP", description: "Gestión de panadería artesanal · Frappe/ERPNext", icon: "PN" },
      ],
      automation: [
        { label: "Comunicaciones", name: "vPBX", description: "Central telefónica virtual para el ecosistema" },
        { label: "Servicio al cliente", name: "Chatbots IA", description: "Atención automatizada con respond.io + inteligencia artificial" },
        { label: "Conectividad", name: "Atitlán Connect", description: "Integración de servicios y plataformas del ecosistema" },
      ],
      stack: [
        "Next.js", "TypeScript", "React", "Supabase", "Firebase",
        "Vercel", "Google Cloud", "Resend", "Tailwind CSS",
        "Frappe/ERPNext", "Python", "respond.io",
      ],
    },
  },
  {
    number: "03",
    title: "Dirección & Operaciones",
    description:
      "60 personas en el ecosistema, 20 reportes directos. Vicepresidente de la Asociación de Restaurantes y Comedores de Panajachel. Responsable directo de cocinas, tecnología, marketing, y RRSS de todo el ecosistema.",
  },
  {
    number: "04",
    title: "Producción Audiovisual",
    description:
      "Productor ejecutivo en AINUR. Ejecución operativa — logística, presupuesto, coordinación. Kris maneja dirección creativa y cámara.",
    ventureChips: ["ainur"],
  },
  {
    number: "05",
    title: "Mercados & Macroeconomía",
    description:
      "Literacy financiera global. Sigue índices de EEUU (S&P 500, NASDAQ, Dow Jones), Europa (FTSE, DAX, STOXX, CAC 40), Asia (Nikkei, KOSPI), y Latinoamérica (Bovespa, MERVAL, IPC México). Monitorea VIX, Dollar Index, metales preciosos, y crypto. Visión macro para decisiones de negocio.",
  },
  {
    number: "06",
    title: "Ciberseguridad",
    description:
      "Postura de seguridad integral. Hardware (YubiKeys), software (suite Proton completa), y consciencia de ingeniería social. Seguridad no solo en código — también en el factor humano.",
  },
  {
    number: "07",
    title: "Pensamiento Político & Ciudadano",
    description:
      "Formación formal en política latinoamericana y ciudadanía activa.",
    training: [
      { text: "Estado, Política y Democracia en América Latina — ELAG + New School University + Grupo de Puebla, 2021" },
      { text: "Transformación Social Global en la Era Pospandémica — UNAM (PUEDJS), 2020" },
      { text: "Nueva Cartilla Ético-Política — ENFP, 2020" },
      { text: "Formación Ciudadana — Movimiento Cívico Nacional, 2024" },
    ],
    ventureChips: ["habitacion"],
  },
];
