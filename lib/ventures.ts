export interface Venture {
  name: string;
  slug: string;
  year: string;
  status: string;
  description: string;
  tag: string;
  type: string;
  url?: string;
  image?: string;
}

export const ventures: Venture[] = [
  {
    name: "Restaurantes Atitlán",
    slug: "restaurantes-atitlan",
    year: "1960",
    status: "Operando",
    description:
      "Tres locaciones en Panajachel, San Juan y Santiago. Seis décadas de tradición gastronómica en el corazón del Lago de Atitlán. El negocio donde todo empezó.",
    tag: "Gastronomía",
    type: "Empresa familiar",
    url: "https://atitlanrestaurantes.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    name: "The Coffee Lab",
    slug: "the-coffee-lab",
    year: "2022",
    status: "Operando",
    description:
      "Exploración científica del café guatemalteco. Educación, extracción precisa y el mejor grano de las tierras altas.",
    tag: "Café",
    type: "Emprendimiento familiar",
    url: "https://thecoffeelab.top",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
  },
  {
    name: "AINUR",
    slug: "ainur",
    year: "2023",
    status: "Operando",
    description:
      "Producción audiovisual. Narrativas del lago y sus comunidades, capturadas con intención. Kris dirige y graba, yo produzco.",
    tag: "Audiovisual",
    type: "Proyecto conjunto con Kris",
    url: "https://ainur.cam",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  },
  {
    name: "Pan Nuestro",
    slug: "pan-nuestro",
    year: "2024",
    status: "En desarrollo",
    description:
      "Panadería artesanal especializada en masas laminadas. Croissants, danishes y pan de masa madre desde Atitlán.",
    tag: "Panadería",
    type: "Emprendimiento propio",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  },
  {
    name: "Atitlán Experience",
    slug: "atitlan-experience",
    year: "2023",
    status: "Operando",
    description:
      "Tours curados y experiencias inmersivas alrededor del Lago de Atitlán. Modelo B2B y B2C. Conectando viajeros con la cultura viva del lago.",
    tag: "Turismo",
    type: "Empresa familiar",
    url: "https://atitlanexperience.com",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
  },
  {
    name: "Habitación",
    slug: "habitacion",
    year: "2024",
    status: "Activo",
    description:
      "Movimiento cristiano no congregacional que reúne diferentes ministerios para encuentros íntimos. Una comunidad de fe sin paredes.",
    tag: "Comunidad",
    type: "Proyecto comunitario",
    url: "https://habitacion.co",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
  },
];
