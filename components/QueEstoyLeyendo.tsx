import Image from "next/image";
import readings from "@/content/readings.json";

export default function QueEstoyLeyendo() {
  return (
    <section className="py-16 px-6 md:px-12 bg-paper border-t border-grey/20">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-serif text-2xl md:text-3xl text-center mb-3 tracking-wide uppercase"
          style={{ fontVariant: "small-caps" }}
        >
          Qué estoy leyendo
        </h2>
        <p className="font-body text-base text-grey text-center mb-10">
          Libros, artículos e ideas que están en mi radar ahora mismo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {readings.map((book, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] bg-surface rounded-sm overflow-hidden mb-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="font-mono text-[0.55rem] uppercase tracking-wider text-red block mb-1">
                {book.type}
              </span>
              <h3 className="font-serif text-lg font-bold leading-snug mb-1">
                {book.title}
              </h3>
              <p className="font-body text-sm text-grey">{book.author}</p>
              {book.note && (
                <p className="font-body text-sm text-grey/70 mt-2 italic">
                  &ldquo;{book.note}&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
