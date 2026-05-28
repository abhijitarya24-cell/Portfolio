"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            AA<span className="text-amber-glow">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-bone/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline hover:text-bone transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-bone text-ink px-5 py-2 text-sm font-medium hover:bg-amber-glow transition-colors"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-bone text-sm"
            aria-label="menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-6 flex flex-col gap-4 text-bone/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-amber-glow text-ink px-5 py-3 font-medium"
            >
              Let&apos;s talk
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
