import Link from "next/link";

export interface WritingPost {
  slug: string;
  number: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

interface WritingItemProps {
  post: WritingPost;
}

export default function WritingItem({ post }: WritingItemProps) {
  return (
    <Link
      href={`/escritura/${post.slug}`}
      className="group flex items-baseline gap-6 py-5 border-b border-surface cursor-pointer hover:pl-3 transition-all"
    >
      <span className="font-mono text-sm text-grey/40 min-w-[2rem]">{post.number}</span>
      <span className="font-serif text-lg md:text-xl font-medium text-ink group-hover:text-red transition-colors flex-1 leading-tight">
        {post.title}
      </span>
      <span className="font-mono text-xs text-grey/40 hidden md:block uppercase tracking-wider">
        {post.category}
      </span>
    </Link>
  );
}
