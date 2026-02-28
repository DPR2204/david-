"use client";

import { timelineEvents } from "@/lib/domains";

export default function Timeline() {
  return (
    <section className="pt-10 pb-8 border-t-2 border-ink">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-red">
        Trayectoria
      </p>

      <div className="relative mt-6 overflow-x-auto scrollbar-hide">
        <div className="flex justify-between items-start min-w-[500px] pt-5">
          {/* Horizontal line */}
          <div className="absolute top-[45px] left-0 right-0 h-px bg-ink/15" />

          {timelineEvents.map((event) => (
            <div
              key={event.slug}
              className="flex flex-col items-center relative flex-1"
            >
              <p className="font-mono text-[0.6rem] text-ink mb-2">
                {event.year}
              </p>
              <div
                className={`w-2 h-2 rounded-full mb-3 relative z-10 ${
                  event.isOpen
                    ? "bg-paper border-2 border-grey/50"
                    : "bg-red"
                }`}
              />
              <p className="font-body text-[0.7rem] text-grey text-center leading-tight max-w-[90px]">
                {event.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
