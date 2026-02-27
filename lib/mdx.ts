import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
  status?: string;
}

export function getPostSlugs(section: string): string[] {
  const dir = path.join(contentDirectory, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(section: string, slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(contentDirectory, section, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || "",
      date: data.date || "",
      category: data.category || "",
      excerpt: data.excerpt || "",
      image: data.image || "",
      featured: data.featured || false,
      status: data.status || "",
    },
    content,
  };
}

export function getAllPosts(section: string): PostMeta[] {
  const slugs = getPostSlugs(section);
  return slugs
    .map((slug) => getPostBySlug(section, slug).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
