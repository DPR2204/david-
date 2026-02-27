import Image from "next/image";

interface EditorialSeparatorProps {
  illustration: string;
}

export default function EditorialSeparator({ illustration }: EditorialSeparatorProps) {
  return (
    <section className="py-12 md:py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="h-px bg-grey/30 mb-8" />
        <div className="flex justify-center">
          <Image
            src={illustration}
            alt=""
            width={300}
            height={150}
            className="opacity-80"
            aria-hidden="true"
          />
        </div>
        <div className="h-px bg-grey/30 mt-8" />
      </div>
    </section>
  );
}
