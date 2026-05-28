"use client";
import { profile } from "@/app/data";
import { Reveal, SectionLabel } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-amber-glow/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="05">Contact</SectionLabel>

        <Reveal>
          <h2 className="font-display font-black tracking-tight leading-[0.95] text-[clamp(2.5rem,9vw,7rem)]">
            Let&apos;s create
            <br />
            <span className="text-stroke-amber italic">impact together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-bone/55 text-lg leading-relaxed">
            Looking for someone who can turn ideas into campaigns that stop the
            scroll — and bring the right people into one room? That&apos;s exactly
            what I do.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-bone text-ink px-8 py-4 font-medium hover:bg-amber-glow transition-colors"
            >
              {profile.email}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-8 py-4 font-medium hover:border-bone/60 hover:bg-bone/5 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-bone/10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-bone/40">
          <div className="font-display text-xl text-bone/70">
            {profile.name}<span className="text-amber-glow">.</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs">
            <span>{profile.location}</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-bone">
              {profile.phone}
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
