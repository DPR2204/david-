import type { WebsitePreview } from "@/lib/domains";

export default function WebsitePreviewCard({ site }: { site: WebsitePreview }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-ink/10 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,26,26,0.08)] transition-all duration-300"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border-b border-ink/5">
        <span className="w-1.5 h-1.5 rounded-full bg-ink/10" />
        <span className="w-1.5 h-1.5 rounded-full bg-ink/10" />
        <span className="w-1.5 h-1.5 rounded-full bg-ink/10" />
        <span className="font-mono text-[0.5rem] text-grey ml-2">
          {site.url.replace("https://", "")}
        </span>
      </div>

      {/* Preview body */}
      <div className="relative aspect-[16/10] bg-paper flex flex-col items-center justify-center p-4">
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: site.accentColor }}
        />
        <p className="font-serif text-base font-bold text-center">
          {site.name}
        </p>
        <p className="font-mono text-[0.45rem] uppercase tracking-wider text-grey text-center mt-1">
          {site.description}
        </p>
      </div>
    </a>
  );
}
