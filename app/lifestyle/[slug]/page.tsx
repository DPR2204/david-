import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import SectionLabel from "@/components/SectionLabel";
import DropCap from "@/components/DropCap";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs("lifestyle");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug("lifestyle", slug);
    return {
      title: `${meta.title} — David Rodas`,
      description: meta.excerpt,
    };
  } catch {
    return { title: "Artículo no encontrado" };
  }
}

export default async function LifestyleArticlePage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug("lifestyle", slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <article>
      {/* Hero image */}
      {meta.image && (
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <Image
            src={meta.image}
            alt={meta.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-3xl mx-auto px-5">
            <SectionLabel>{meta.category}</SectionLabel>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
              {meta.title}
            </h1>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-5 py-8 md:py-12">
        {!meta.image && (
          <header className="mb-8">
            <SectionLabel>{meta.category}</SectionLabel>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink mt-3 mb-4 leading-tight">
              {meta.title}
            </h1>
          </header>
        )}

        <p className="font-mono text-xs text-red uppercase tracking-[0.2em] mb-8">
          {meta.date}
        </p>

        {/* Body */}
        <div className="prose">
          <MDXRemote source={content} components={{ DropCap }} />
        </div>

        {/* Footer */}
        <footer className="border-t border-surface mt-12 pt-6">
          <Link
            href="/lifestyle"
            className="font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
          >
            &#8592; Volver a Lifestyle
          </Link>
        </footer>
      </div>
    </article>
  );
}
