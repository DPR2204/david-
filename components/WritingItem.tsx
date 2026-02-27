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
      className="group grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-baseline py-5 border-b border-surface"
    >
      <span className="font-mono text-sm text-grey">{post.number}</span>
      <h3 className="font-serif text-lg font-bold text-ink group-hover:text-red transition-colors leading-tight">
        {post.title}
      </h3>
      <span className="font-mono text-xs uppercase tracking-wider text-grey hidden sm:block">
        {post.category}
      </span>
    </Link>
  );
}
