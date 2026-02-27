'use client';
import { useState } from 'react';

interface EditorialSeparatorProps {
  illustration: string;
  alt?: string;
  className?: string;
}

export default function EditorialSeparator({ illustration, alt = "", className = "" }: EditorialSeparatorProps) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <section className={`py-12 md:py-16 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-lg px-6">
        <div className="h-px bg-grey/20 mb-10" />
        {hasImage ? (
          <div className="flex justify-center">
            <img
              src={illustration}
              alt={alt}
              className="h-32 md:h-44 w-auto illustration-vineta"
              aria-hidden="true"
              onError={() => setHasImage(false)}
            />
          </div>
        ) : (
          <div className="flex justify-center py-2">
            <span className="text-grey/30 text-lg">&#9670;</span>
          </div>
        )}
        <div className="h-px bg-grey/20 mt-10" />
      </div>
    </section>
  );
}
