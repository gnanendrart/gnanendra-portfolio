# gnanendra-portfolio

Personal portfolio for **Gnanendra Reddy Tugu Yagama Reddy** - Senior Data Analyst specializing in data quality engineering, pipeline reliability, and AI-augmented analytics.

Built with Next.js 14 (App Router) and Tailwind CSS. Dark mode, fully responsive, no external dependencies beyond Next.js core.

## Local Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Animations:** CSS transitions + Intersection Observer API (no extra libraries)
- **Fonts:** Inter via `next/font/google`

## Project Structure

```
gnanendra-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font config
│   ├── page.tsx            # Page composition - imports all sections
│   └── globals.css         # Tailwind directives + global styles
├── components/
│   ├── Navigation.tsx      # Sticky nav, active-section tracking, mobile drawer
│   ├── Hero.tsx            # Full-viewport hero with dot-grid bg and metric badges
│   ├── Stats.tsx           # Animated metric counters (Intersection Observer)
│   ├── About.tsx           # Two-column narrative + focus areas + quick facts
│   ├── Projects.tsx        # Featured project cards with tech stack badges
│   ├── Experience.tsx      # Vertical timeline with education strip
│   ├── Skills.tsx          # Colour-coded skill group cards
│   ├── Contact.tsx         # Contact CTA + social link cards
│   └── Footer.tsx          # Minimal footer
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Sections

| Section | ID | Content |
|---|---|---|
| Hero | - | Name, tagline, key metric badges, CTAs |
| Stats | - | Animated counters: 97% error reduction, 1.5M+ records, 3M+/wk, 80% interception |
| About | `#about` | Narrative bio, focus areas, quick facts, awards |
| Projects | `#projects` | AI Data Quality Checker, AI Job Search Agent |
| Experience | `#experience` | CDC (×2), Teladoc, Cognizant + education |
| Skills | `#skills` | 6 skill groups: languages, platforms, cloud/ETL, BI, AI/automation, frontend |
| Contact | `#contact` | Email CTA + LinkedIn / GitHub / Email links |
