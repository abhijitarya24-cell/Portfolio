"use client";
import { motion } from "framer-motion";
import { profile } from "@/app/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* atmospheric glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-amber-glow/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[32rem] w-[32rem] rounded-full bg-sage/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-sage animate-floaty" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone/50">
              {profile.available}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-black leading-[0.9] tracking-tight text-[clamp(2.8rem,11vw,9rem)]"
          >
            <span className="block">{profile.first}</span>
            <span className="block text-stroke-amber italic">{profile.last}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 max-w-2xl"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug text-bone/90">
              {profile.tagline}
            </p>
            <p className="mt-5 text-bone/55 text-lg leading-relaxed">
              {profile.role} · community builder · the person who gets industry
              experts, startups, and young talent into one room.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-amber-glow text-ink px-7 py-4 font-medium glow-amber hover:bg-amber-soft transition-colors"
            >
              See the work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-7 py-4 font-medium hover:border-bone/60 hover:bg-bone/5 transition-colors"
            >
              Start a conversation
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/30">
        Scroll
      </div>
    </section>
  );
}
