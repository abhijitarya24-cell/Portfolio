"use client";
import { marquee } from "@/app/data";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-bone/10 py-6 overflow-hidden bg-bone/[0.02]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl md:text-3xl">
            <span className={i % 2 === 0 ? "text-bone/80" : "text-stroke"}>{m}</span>
            <span className="text-amber-glow text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
