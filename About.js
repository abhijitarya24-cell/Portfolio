"use client";
import { about } from "@/app/data";
import { Reveal, SectionLabel } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="01">About</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight">
                {about.lead}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6 max-w-xl text-bone/60 text-lg leading-relaxed">
              {about.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="grid grid-cols-2 gap-px bg-bone/10 rounded-3xl overflow-hidden border border-bone/10">
              {about.stats.map((s, i) => (
                <Reveal key={i} delay={i * 0.08} className="bg-ink">
                  <div className="p-7 h-full hover:bg-bone/[0.03] transition-colors">
                    <div className="font-display text-4xl md:text-5xl font-bold text-amber-soft">
                      {s.value}
                    </div>
                    <div className="mt-3 text-sm text-bone/50 leading-snug">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
