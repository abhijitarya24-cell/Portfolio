# Abhijit Arya — Portfolio

A premium, dark-mode personal portfolio for **Abhijit Arya**, Marketing & Brand Strategist. Built to communicate impact to a recruiter within the first 5–10 seconds: a bold editorial hero, metric-led case studies, and a clean experience timeline.

## Overview

- **Role focus:** Marketing & Brand Strategy (campaigns, event marketing, community + ecosystem building)
- **Design direction:** Editorial / refined-bold. Dark canvas, warm amber accent, expressive display serif (Fraunces) paired with a clean geometric sans (Outfit) and a mono accent (JetBrains Mono). Grain texture, atmospheric glows, marquee, and subtle scroll + hover micro-interactions.
- **Sections:** Hero → Marquee → About (with stat grid) → Featured Work / Case Studies → Experience → Skills & Recognition → Contact

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling (custom theme tokens)
- **Framer Motion** for entrance and scroll reveals
- **next/font** (Google Fonts, self-hosted at build) — no external runtime font calls
- No environment variables required

## Project Structure

```
abhijit-arya-portfolio/
├── app/
│   ├── data.js          # All site content (single source of truth)
│   ├── globals.css      # Theme tokens, grain, utilities
│   ├── layout.js        # Fonts + metadata
│   └── page.js          # Section composition
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── Marquee.js
│   ├── About.js
│   ├── Work.js
│   ├── Experience.js
│   ├── Skills.js
│   ├── Contact.js
│   └── Reveal.js        # Shared animation + section-label helpers
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## Local Setup

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create an optimized production build:

```bash
npm run build
npm run start
```

## Editing Content

All copy, metrics, experience, skills, and links live in **`app/data.js`**. Update that one file to change anything on the page — no component edits needed.
