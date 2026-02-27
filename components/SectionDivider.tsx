import Image from "next/image";

interface SectionDividerProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function SectionDivider({ image, title, subtitle }: SectionDividerProps) {
  return (
    <section className="pt-6 pb-4 flex flex-col items-center px-6">
      <div className="w-[60%] h-px bg-grey/20 mb-4" />

      <div className="relative w-[90%] max-w-[500px] aspect-[16/7]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>

      <h2 className="font-serif text-sm md:text-base uppercase tracking-[0.2em] text-ink mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm italic text-grey mt-1">
          {subtitle}
        </p>
      )}

      <div className="w-[60%] h-px bg-grey/20 mt-3" />
    </section>
  );
}
