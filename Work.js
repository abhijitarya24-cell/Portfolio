"use client";
import { featured } from "@/app/data";
import { Reveal, SectionLabel } from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="02">Featured Work</SectionLabel>

        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Campaigns with receipts<span className="text-amber-glow">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <article className="group relative grid lg:grid-cols-12 gap-6 lg:gap-10 rounded-3xl border border-bone/10 p-7 md:p-10 hover:border-bone/25 transition-all duration-500 overflow-hidden">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: p.accent }}
                />

                <div className="lg:col-span-1 font-mono text-sm text-bone/30">
                  0{i + 1}
                </div>

                <div className="lg:col-span-7 relative z-10">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone/40">
                    {p.tag}
                  </div>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-bone/50">{p.subtitle}</div>
                  <p className="mt-5 text-bone/60 leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                </div>

                <div className="lg:col-span-4 relative z-10 flex flex-col justify-between gap-6">
                  <div
                    className="font-display text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: p.accent }}
                  >
                    {p.metric}
                  </div>
                  <ul className="space-y-3">
                    {p.impact.map((it, j) => (
                      <li key={j} className="flex gap-3 text-sm text-bone/65">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: p.accent }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
