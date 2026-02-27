import Link from "next/link";

export interface Venture {
  name: string;
  year: string;
  status: string;
  description: string;
  tag: string;
  href?: string;
}

interface VentureCardProps {
  venture: Venture;
}

export default function VentureCard({ venture }: VentureCardProps) {
  const content = (
    <div className="group py-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs uppercase tracking-wider text-grey">
          {venture.year}
        </span>
        <span className="font-mono text-[0.55rem] uppercase tracking-wider text-red border border-red px-3 py-1 rounded-sm">
          {venture.tag}
        </span>
      </div>
      <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-red transition-colors">
        {venture.name}
        <span className="inline-block ml-2 text-grey group-hover:text-red transition-colors">
          &#8599;
        </span>
      </h3>
      <p className="font-body text-sm text-grey leading-relaxed">
        {venture.description}
      </p>
      {venture.status && (
        <p className="font-mono text-xs text-grey mt-2 uppercase tracking-wider">
          {venture.status}
        </p>
      )}
    </div>
  );

  if (venture.href) {
    return (
      <Link href={venture.href} className="block border-b border-surface">
        {content}
      </Link>
    );
  }

  return <div className="border-b border-surface">{content}</div>;
}
