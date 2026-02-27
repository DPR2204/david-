import Image from "next/image";

interface SectionDividerProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function SectionDivider({ image, title, subtitle }: SectionDividerProps) {
  return (
    <section className="py-16 md:py-20 flex flex-col items-center px-6">
      <div className="w-[60%] h-px bg-grey/20 mb-10" />

      <div className="relative w-[95%] max-w-[800px] aspect-[16/7]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 95vw, 800px"
        />
      </div>

      <h2 className="font-serif text-sm md:text-base uppercase tracking-[0.2em] text-ink mt-8 mb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm italic text-grey">
          {subtitle}
        </p>
      )}

      <div className="w-[60%] h-px bg-grey/20 mt-10" />
    </section>
  );
}
