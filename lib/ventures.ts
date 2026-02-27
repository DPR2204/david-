import { siteImages } from "./cloudinary";

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
    image: siteImages.davidRafa,
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
    image: siteImages.aboutSecondary,
  },
];
