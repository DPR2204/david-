import Link from "next/link";
import Image from "next/image";
import type { Venture } from "@/lib/ventures";

export default function VentureChip({ venture }: { venture: Venture }) {
  return (
    <Link
      href={`/ventures/${venture.slug}`}
      className="group relative overflow-hidden flex-1 min-w-[200px] h-[140px]"
    >
      {venture.image ? (
        <Image
          src={venture.image}
          alt={venture.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-ink">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-mono text-[0.4rem] uppercase tracking-wider text-paper/50">
          {venture.type}
        </p>
        <h4 className="font-serif text-lg font-bold text-paper leading-tight">
          {venture.name}
        </h4>
        <p className="font-mono text-[0.5rem] text-paper/40 mt-1">
          {venture.year} · {venture.status}
        </p>
      </div>
    </Link>
  );
}
