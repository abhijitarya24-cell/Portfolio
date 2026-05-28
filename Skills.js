"use client";
import { skills, achievements } from "@/app/data";
import { Reveal, SectionLabel } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="04">Skills & Recognition</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-10">
                The toolkit<span className="text-amber-glow">.</span>
              </h2>
            </Reveal>

            <div className="space-y-8">
              {skills.map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone/40 mb-3">
                      {s.group}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-bone/15 px-4 py-2 text-sm text-bone/75 hover:border-amber-glow hover:text-amber-soft hover:-translate-y-0.5 transition-all duration-300"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-bone/10 p-8 bg-bone/[0.02] h-full">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone/40 mb-6">
                  Honors & Certifications
                </div>
                <ul className="space-y-5">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-display text-amber-glow text-lg leading-none">
                        ✦
                      </span>
                      <span className="text-bone/75 leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
