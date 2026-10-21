# Falah Academy — school website

A static, responsive website for Falah Academy built with Next.js (App Router), TypeScript and Tailwind CSS v4. There is no server, database or API: `npm run build` produces a fully static site in `out/`.

## Stack

- Next.js 16 (static export via `output: "export"`)
- TypeScript, Tailwind CSS v4
- Motion (`motion/react`) for subtle, reduced-motion-aware animation
- Phosphor Icons
- `sharp` (dev only) to pre-generate optimized WebP/AVIF images

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npx serve out      # preview the exported site
```

Deploy the contents of `out/` to any static host (Netlify, Cloudflare Pages, Vercel, S3, cPanel/Apache…). `public/.htaccess` adds caching and a 404 page on Apache/LiteSpeed hosts.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, trust indicators, welcome, Montessori → Intermediate journey, why choose us, stage spotlights (Montessori / school years / Intermediate), faculty, student life, facilities, admission steps, gallery, news, call to action. Verified statistics and testimonials appear automatically once added |
| `/about` | Introduction & history, vision & mission, core values, Principal's message, faculty, why Falah Academy, educational philosophy |
| `/academics` | Montessori, Primary, Middle, Secondary (Matric) and Intermediate in detail (each has an anchor, e.g. `/academics#intermediate`), subjects, teaching approach |
| `/admissions` | Admission process timeline, requirements, apply/inquiry form, FAQs |
| `/student-life` | Student life mosaic, school activities, testimonials |
| `/facilities` | Ten facility cards |
| `/gallery` | Filterable gallery with keyboard/swipe lightbox |
| `/news-events` and `/news-events/[slug]` | News & event cards with detail pages |
| `/contact` | Contact details, contact form, map, FAQs |

## Editing content

Almost everything is data, not markup:

- **`src/content/site.ts`**: school name, SEO title/description, domain, address, phone, email, school hours, map embed, social links, navigation and footer links, contact-form endpoint.
- **`src/content/school.ts`**: statistics, why-choose-us cards, vision, mission, core values, history, Principal's message, programmes, subjects, teaching approach, admission steps and requirements, facilities, student life, activities, gallery photos, news & events, testimonials and FAQs.

Add a news item, FAQ or gallery photo by appending to the relevant array. News detail pages and the sitemap update automatically.

### Images

Put originals (JPG/PNG/WebP) under `public/images/` and reference them as `/images/...`. `npm run images` (also run automatically before every build) generates responsive WebP variants, AVIF variants for full-bleed backdrops listed in `src/lib/image-config.json`, and blur placeholders. Generated files go to `public/img-opt/`; don't edit them by hand.

The current photographs are free-to-use images from [Unsplash](https://unsplash.com/license), chosen to show Pakistani students, classrooms and school life (most of the classroom series is by Assad Tanoli). They are **not** photos of Falah Academy, so alt text describes them generically. Replace them with real photos of the school as soon as possible; keep the same file paths, or update the paths in `school.ts`. Facilities without a photo (`image` omitted in `school.ts`) show a branded icon panel instead.

## Before you launch

Placeholders are in `[square brackets]` or marked `TODO` in the content files:

- [ ] `site.ts`: `domain` / `baseUrl` (currently the reserved `falahacademy.example`), `contact.address`, `city`, `phone` + `phoneHref`, `whatsappHref`, `email` + `emailHref`, `mapEmbedUrl` / `mapLinkUrl`, `foundingYear`, social URLs. The Call / WhatsApp / Get Directions buttons (contact section, mobile menu, phone quick-contact bar) appear as soon as their links are set
- [ ] `school.ts`: Principal's name; the Principal's photo placeholder is in `src/app/about/page.tsx`
- [ ] `school.ts`: add real, consented testimonials to `testimonials` (the section is hidden while it is empty)
- [ ] `school.ts`: add verified figures (years, students, teachers, results) to `stats` (the numbers band is hidden while it is empty)
- [ ] `school.ts`: confirm the facilities list, programme grades, Intermediate details, history wording and news/event dates
- [ ] Replace the stock photographs with real photos of Falah Academy
- [ ] Contact form: set `contactFormEndpoint` (Formspree, Getform, Basin…) **or** set `contact.emailHref` so the form opens a pre-filled email. Until one of them is set, the form tells visitors to call or visit instead of pretending a message was sent.

## Project structure

```
src/
  app/                  Routes (one folder per page), sitemap, robots, icon
  components/
    layout/             Header, MobileMenu, Footer
    sections/           Page sections (Hero, Stats, Academics, Facilities, FAQ…)
    forms/              ContactForm
    ui/                 Button, Container, SectionHeading, IconCard, Logo, Reveal…
  content/              site.ts and school.ts: all editable content
  lib/                  Image loader/manifest, helpers
scripts/                Image optimizer, post-build cache headers
```

## Logo

`public/images/brand/` holds transparent PNGs generated from the supplied logo: `logo-compact.png` / `logo-compact-light.png` (header and footer, light and navy surfaces), `logo-mark.png` / `logo-mark-light.png` (icon only), and `logo-full.png` (with the "Growth • Knowledge • Success" line, used as the logo in search-engine structured data). The favicon and Apple touch icon are `src/app/icon.png` and `src/app/apple-icon.png`. Use the `<Logo>` / `<LogoMark>` components rather than linking the files directly.

## Design system

All tokens live in `src/app/globals.css` (`@theme`); reuse them instead of one-off values.

- **Colours (from the logo):** logo blue primary (`accent`, `accent-strong` = wordmark `#0d4485`), logo teal (`emerald`, `emerald-light` on navy), logo green highlight (`highlight` for CTAs on navy, `highlight-deep` for green text on white), off-white `bg`, white `bg-elevated`, tinted `bg-tint`, deep navy `bg-inverted`. `text-brand-gradient` is the logo's teal → green sweep for headline accents on navy.
- **Type:** Plus Jakarta Sans for headings, DM Sans for body. Sizes: `text-display-xl` (hero h1), `text-display-lg` (page h1), `text-display-md` (section h2), `text-title` (card h3), `text-lead` (intros), `text-body` (card copy), `label` (small uppercase labels).
- **Spacing:** 8px scale; sections use `py-section` / `py-section-sm`; containers use `max-w-content` (80rem) with a 24px/32px gutter.
- **Surfaces:** `card` (standard card), `card-lift` (hover elevation), `field` (form controls), `surface-tint` / `surface-ink` / `surface-footer` (section backgrounds), `pattern-geo` (eight-point-star pattern on navy).
- **Buttons:** `<Button variant="primary | highlight | secondary | onDark | ghost" size="sm | md">`.
- **Motion:** `<Reveal from="up | left | right | scale | clip">`, `<RevealGroup>` + `<RevealItem>` for staggered grids; durations `--duration-fast/base/slow`, one easing curve. Everything is static under `prefers-reduced-motion`.
- **Mobile:** add `snap-row` to a card grid to turn it into a swipe row on phones.

## SEO & accessibility

- Per-page titles/descriptions, Open Graph/Twitter tags, canonical URLs, `sitemap.xml`, `robots.txt`
- `School` / `EducationalOrganization` JSON-LD in the root layout; `Event` / `NewsArticle` JSON-LD on news pages
- Semantic landmarks, one `h1` per page, skip link, visible focus states, keyboard-accessible menu, lightbox and FAQ (native `<details>`), labelled form fields with inline errors
- All animation collapses to static under `prefers-reduced-motion`
