import ScrollReveal from "@/components/ScrollReveal";
import GitHubCard from "./GitHubCard";
import WebsitePreviewCard from "./WebsitePreviewCard";
import type { Domain } from "@/lib/domains";

export default function TechDomain({ domain }: { domain: Domain }) {
  const tech = domain.techExpanded!;

  return (
    <section className="pt-10 pb-6 border-t-2 border-ink">
      {/* Header */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 mb-6">
          <span className="font-serif text-[5rem] md:text-[6rem] font-bold leading-none text-ink/[0.06] select-none">
            {domain.number}
          </span>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-ink mb-2">
              {domain.title}
            </h2>
            <p className="font-body text-sm md:text-base text-grey leading-relaxed max-w-xl">
              {domain.description}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* GitHub card */}
      <ScrollReveal>
        <GitHubCard
          handle={tech.github.handle}
          bio={tech.github.bio}
          repos={tech.github.repos}
          url={tech.github.url}
        />
      </ScrollReveal>

      {/* Sitios Web */}
      <ScrollReveal>
        <p className="font-mono text-[0.55rem] uppercase tracking-wider text-ink mt-8 mb-4 pb-2 border-b border-ink/10">
          Sitios Web — Diseño & desarrollo completo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tech.websites.map((site) => (
            <WebsitePreviewCard key={site.url} site={site} />
          ))}
        </div>
      </ScrollReveal>

      {/* Sistemas Internos */}
      <ScrollReveal>
        <p className="font-mono text-[0.55rem] uppercase tracking-wider text-ink mt-8 mb-4 pb-2 border-b border-ink/10">
          Sistemas internos — Gestión operativa
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tech.internalSystems.map((sys) => (
            <div key={sys.name} className="flex items-center gap-3 p-4 bg-surface">
              <div className="w-10 h-10 bg-ink flex items-center justify-center shrink-0">
                <span className="font-mono text-[0.55rem] text-paper">
                  {sys.icon}
                </span>
              </div>
              <div>
                <p className="font-body text-sm font-medium">{sys.name}</p>
                <p className="font-mono text-[0.5rem] text-grey">{sys.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Automatización & IA */}
      <ScrollReveal>
        <p className="font-mono text-[0.55rem] uppercase tracking-wider text-ink mt-8 mb-4 pb-2 border-b border-ink/10">
          Automatización & Inteligencia Artificial
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tech.automation.map((item) => (
            <div key={item.name} className="p-4 border border-ink/10">
              <p className="font-mono text-[0.5rem] uppercase tracking-wider text-red mb-2">
                {item.label}
              </p>
              <p className="font-body text-sm font-medium mb-1">{item.name}</p>
              <p className="font-mono text-[0.5rem] text-grey leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Stack */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-ink/[0.06]">
          {tech.stack.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[0.6rem] text-ink border border-ink/15 px-3 py-1.5"
            >
              {tool}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
