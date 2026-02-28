import Image from "next/image";

interface SectionDividerProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function SectionDivider({ image, title, subtitle }: SectionDividerProps) {
  return (
    <section className="pt-8 pb-2 flex flex-col items-center px-6">
      <div className="w-[60%] h-px bg-grey/20 mb-6" />

      <div className="relative w-full max-w-[650px] aspect-[16/5]">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 650px"
        />
      </div>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center -mt-4 md:-mt-6 relative z-10">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm italic text-grey mt-1">
          {subtitle}
        </p>
      )}

      <div className="w-[60%] h-px bg-grey/20 mt-4" />
    </section>
  );
}
