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
  index: number;
}

export default function VentureCard({ venture, index }: VentureCardProps) {
  return (
    <div
      className={`group py-8 pr-8 border-b border-surface hover:bg-ink/[0.02] transition-colors cursor-pointer ${
        index % 2 === 1 ? "md:pl-8 md:border-l md:border-surface" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-grey">{venture.year}</span>
        <span className="font-mono text-[0.55rem] uppercase tracking-wider text-red border border-red px-2.5 py-0.5 rounded-sm">
          {venture.tag}
        </span>
      </div>
      <h3 className="font-serif text-xl md:text-2xl font-bold flex items-center gap-2 mb-2">
        <span className="text-ink group-hover:text-red transition-colors">{venture.name}</span>
        <span className="text-base text-grey/40 group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          &#8599;
        </span>
      </h3>
      <p className="font-body text-sm md:text-base text-grey leading-relaxed max-w-md">
        {venture.description}
      </p>
      {venture.status && (
        <p className="font-mono text-xs text-grey mt-3 uppercase tracking-wider">
          {venture.status}
        </p>
      )}
    </div>
  );
}
