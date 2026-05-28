"use client";
import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-mono text-xs text-amber-glow">{index}</span>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone/40">
        {children}
      </span>
      <span className="h-px flex-1 bg-bone/10" />
    </div>
  );
}
