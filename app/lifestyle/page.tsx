import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import LifestyleCard from "@/components/LifestyleCard";
import { getAllPosts } from "@/lib/mdx";
import { siteImages } from "@/lib/cloudinary";

export const metadata = {
  title: "Lifestyle — David Rodas",
  description: "Gastronomía, café, vida en el lago y cultura de Atitlán.",
};

const lifestyleData = [
  {
    slug: "vida-en-el-lago",
    title: "Vida en el Lago",
    category: "Lifestyle",
    image: siteImages.davidMedium,
    excerpt: "Lo que significa vivir rodeado de volcanes y agua.",
  },
  {
    slug: "gastronomia-de-atitlan",
    title: "Gastronomía de Atitlán",
    category: "Gastronomía",
    image: siteImages.lifestyle,
    excerpt: "Sabores ancestrales y cocina contemporánea desde el lago.",
  },
  {
    slug: "el-ritual-del-cafe",
    title: "El ritual del café",
    category: "Café",
    image: siteImages.kitchen,
    excerpt: "Del grano a la taza: el café como meditación matutina.",
  },
  {
    slug: "mercados-del-altiplano",
    title: "Mercados del altiplano",
    category: "Cultura",
    image: siteImages.davidRafa,
    excerpt: "Color, tradición y comercio en los mercados mayas.",
  },
  {
    slug: "pan-de-masa-madre",
    title: "Pan de masa madre en altura",
    category: "Panadería",
    image: siteImages.heroMain,
    excerpt: "Los desafíos de fermentar a 1,500 metros sobre el nivel del mar.",
  },
  {
    slug: "atardeceres-volcanicos",
    title: "Atardeceres volcánicos",
    category: "Fotografía",
    image: siteImages.aboutSecondary,
    excerpt: "La luz dorada sobre los tres volcanes del lago.",
  },
];

export default function LifestylePage() {
  const mdxPosts = getAllPosts("lifestyle");

  const posts = mdxPosts.length > 0
    ? mdxPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        image: p.image || siteImages.davidMedium,
        excerpt: p.excerpt,
      }))
    : lifestyleData;

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
      <ScrollReveal>
        <SectionLabel>Lifestyle</SectionLabel>
        <div className="h-[2px] bg-ink mt-4 mb-8" />
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          {posts.slice(0, 2).map((post) => (
            <LifestyleCard key={post.slug} post={post} size="large" />
          ))}
        </div>
      </ScrollReveal>

      {posts[2] && (
        <ScrollReveal>
          <div className="mb-3">
            <LifestyleCard post={posts[2]} size="large" />
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <div className="grid md:grid-cols-3 gap-3">
          {posts.slice(3).map((post) => (
            <LifestyleCard key={post.slug} post={post} size="small" />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
