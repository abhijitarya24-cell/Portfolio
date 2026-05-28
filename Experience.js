"use client";
import { experience } from "@/app/data";
import { Reveal, SectionLabel } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="03">Experience</SectionLabel>

        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-16">
            A track record built in public<span className="text-amber-glow">.</span>
          </h2>
        </Reveal>

        <div className="border-t border-bone/10">
          {experience.map((e, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <div className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-bone/10 hover:bg-bone/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-2xl">
                <div className="md:col-span-3 font-mono text-sm text-bone/40 pt-1">
                  {e.period}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-semibold tracking-tight group-hover:text-amber-soft transition-colors">
                    {e.role}
                  </h3>
                  <div className="mt-1 text-bone/50 text-sm">{e.org}</div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-bone/60 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-glow/60" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
