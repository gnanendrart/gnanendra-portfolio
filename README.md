# gnanendra-portfolio

Personal portfolio for **Gnanendra Reddy Tugu**, a senior data analyst who builds AI tools.

Single page, server-rendered, light and dark themes.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run build
npm run lint
```

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3, colours as CSS variables
- **Language:** TypeScript
- **Fonts:** Source Serif 4 and Figtree via `next/font/google`

No environment variables are required.

## Structure

```
gnanendra-portfolio/
├── app/
│   ├── layout.tsx            # Fonts, metadata, theme script
│   ├── page.tsx              # Section order
│   ├── globals.css           # Theme tokens and base styles
│   ├── icon.svg              # Favicon
│   └── opengraph-image.tsx   # Share image
├── components/               # Layout only, no copy
├── content/                  # All copy and numbers
│   ├── site.ts               # Name, links, hero and about text
│   ├── cases.ts              # The three cases
│   ├── projects.ts           # AI tools and data projects
│   ├── experience.ts         # Roles and education
│   └── skills.ts             # Skill groups
└── public/
    └── Gnanendra_Reddy_Tugu_Resume.pdf
```

## Editing content

Every word and number on the page lives in `content/`. To update a project, a role or a link, edit the matching file there. Components do not need to change.

To replace the resume, overwrite `public/Gnanendra_Reddy_Tugu_Resume.pdf`.

## Theme

Colours are defined once in `app/globals.css` under `:root` (light) and `[data-theme='dark']`. The toggle in the header saves the choice in the browser.
