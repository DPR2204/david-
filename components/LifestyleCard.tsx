import Link from "next/link";
import Image from "next/image";

export interface LifestylePost {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
}

interface LifestyleCardProps {
  post: LifestylePost;
  size?: "large" | "medium" | "small";
}

export default function LifestyleCard({ post, size = "medium" }: LifestyleCardProps) {
  const heightClass = size === "large" ? "h-[400px] md:h-[500px]" : size === "medium" ? "h-[300px] md:h-[380px]" : "h-[250px] md:h-[300px]";

  return (
    <Link href={`/lifestyle/${post.slug}`} className={`group relative block overflow-hidden rounded-sm ${heightClass}`}>
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-red mb-2 block">
          {post.category}
        </span>
        <h3 className={`font-serif font-normal text-white leading-tight ${size === "large" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
