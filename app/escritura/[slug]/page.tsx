import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import SectionLabel from "@/components/SectionLabel";
import DropCap from "@/components/DropCap";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs("escritura");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug("escritura", slug);
    return {
      title: `${meta.title} — David Rodas`,
      description: meta.excerpt,
    };
  } catch {
    return { title: "Artículo no encontrado" };
  }
}

const components = {
  DropCap,
};

export default async function EscrituraArticlePage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug("escritura", slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <article className="max-w-3xl mx-auto px-5 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12">
        <div className="mb-4">
          <Link
            href="/escritura"
            className="font-mono text-xs uppercase tracking-wider text-grey hover:text-ink transition-colors"
          >
            &#8592; Escritura
          </Link>
        </div>
        <SectionLabel>{meta.category}</SectionLabel>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink mt-3 mb-4 leading-tight">
          {meta.title}
        </h1>
        <p className="font-mono text-xs text-red uppercase tracking-[0.2em]">
          {meta.date}
          {meta.status && <span className="text-grey"> · {meta.status}</span>}
        </p>
        <div className="w-[50px] h-[3px] bg-red mt-6" />
      </header>

      {/* Body */}
      <div className="prose">
        <MDXRemote source={content} components={components} />
      </div>

      {/* Footer */}
      <footer className="border-t border-surface mt-16 pt-8">
        <Link
          href="/escritura"
          className="font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
        >
          &#8592; Volver a Escritura
        </Link>
      </footer>
    </article>
  );
}
