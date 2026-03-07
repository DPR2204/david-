interface Stat {
  value: string;
  label: string;
}

export default function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-wrap gap-10 pt-6 mt-8 border-t border-ink/10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <span className="font-serif text-4xl md:text-5xl font-normal leading-none">
            {stat.value}
          </span>
          <p className="font-mono text-[0.55rem] uppercase tracking-wider text-grey mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
