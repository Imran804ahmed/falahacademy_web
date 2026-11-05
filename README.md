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
| `/` | Hero (with the three key messages), Our Educational Programs (Playgroup, Nursery, Kindergarten, Huffaz Education System), about, why choose us, Huffaz spotlight, Playgroup → Intermediate journey, admissions call to action, gallery, contact |
| `/about` | Introduction & history, vision & mission, core values, Principal's message, faculty, why Falah Academy, educational philosophy |
| `/academics` | The four featured programmes (anchors `#playgroup`, `#nursery`, `#kindergarten`, `#huffaz`), then Montessori, Primary, Middle, Secondary (Matric) and Intermediate in detail (e.g. `/academics#intermediate`), subjects, tuition services, teaching approach |
| `/huffaz-education` | Huffaz Education System: overview and clarification, who it is for, highlights, how it works, enquiry form (`#enquire`), FAQs |
| `/admissions` | Admission process timeline, requirements, apply/inquiry form, FAQs |
| `/student-life` | Student life mosaic, school activities, testimonials |
| `/facilities` | Ten facility cards |
| `/gallery` | Filterable gallery with keyboard/swipe lightbox |
| `/news-events` and `/news-events/[slug]` | News & event cards with detail pages |
| `/contact` | Contact details, contact form, map, FAQs |

## Editing content

Almost everything is data, not markup:

- **`src/content/site.ts`**: school name, SEO title/description, domain, address, phone, email, school hours, map embed, social links, navigation and footer links, contact-form endpoint.
- **`src/content/school.ts`**: the featured programmes (`featuredPrograms`) and Huffaz page content (`huffazEducation`), statistics, why-choose-us cards (`homeReasons` on the home page), vision, mission, core values, history, Principal's message, programmes, subjects, teaching approach, admission steps and requirements, facilities, student life, activities, gallery photos, news & events, testimonials and FAQs.

Add a news item, FAQ or gallery photo by appending to the relevant array. News detail pages and the sitemap update automatically.

### Images

Put originals (JPG/PNG/WebP) under `public/images/` and reference them as `/images/...`. `npm run images` (also run automatically before every build) generates responsive WebP variants, AVIF variants for full-bleed backdrops listed in `src/lib/image-config.json`, and blur placeholders. Generated files go to `public/img-opt/`; don't edit them by hand.

The current photographs are free-to-use images from [Unsplash](https://unsplash.com/license), chosen to show Pakistani students, classrooms and school life (most of the classroom series is by Assad Tanoli). They are **not** photos of Falah Academy, so alt text describes them generically. Replace them with real photos of the school as soon as possible; keep the same file paths, or update the paths in `school.ts`. Facilities without a photo (`image` omitted in `school.ts`) show a branded icon panel instead.

### Photo credits

Photos of students in Islamic dress (hijab, white topi and kurta) come from [Pexels](https://www.pexels.com/license/): free for commercial website use, attribution not required. Licence terms to respect: don't imply the people shown endorse the school, and don't show them in a bad light. Alt text therefore describes each scene, not "our students". Each photo page showed the "Free" licence when it was checked (November 2026).

| File (`public/images/…`) | Used for | Source | Photographer |
| --- | --- | --- | --- |
| `hero/islamic-school-girls-reading.jpg` | Home hero, social share image | [Pexels 14071968](https://www.pexels.com/photo/14071968/) | Fatima Yusuf |
| `programs/nursery-girl-hijab-writing.jpg` | Not used (Nursery card now uses the academy's photo) | [Pexels 448877](https://www.pexels.com/photo/448877/) | Akela Photography |
| `programs/kindergarten-girl-hijab-reading.jpg` | Not used (Kindergarten card now uses the academy's photo) | [Pexels 19986544](https://www.pexels.com/photo/19986544/) | Fatima Yusuf |
| `programs/huffaz-student-topi-classroom.jpg` | Not used (Huffaz card now uses the academy's photo) | [Pexels 39838897](https://www.pexels.com/photo/39838897/) | Al Hoque |
| `huffaz/hafiz-students-white-uniform.jpg` | Not used (the Huffaz spotlight now uses the academy's photo) | [Pexels 8983101](https://www.pexels.com/photo/8983101/) | Shardar Tarikul Islam |
| `huffaz/student-writing-exam.jpg` | /huffaz-education overview | [Pexels 19520596](https://www.pexels.com/photo/19520596/) | Muhaimin Abdul Aziz |
| `huffaz/students-writing-classroom.jpg` | /huffaz-education header, gallery | [Pexels 19954774](https://www.pexels.com/photo/19954774/) | Muhaimin Abdul Aziz |
| `about/girls-hijab-classroom.jpg` | Not used (the About section now uses the academy's photo) | [Pexels 14071972](https://www.pexels.com/photo/14071972/) | Fatima Yusuf |
| `about/islamic-school-classroom.jpg` | /about header | [Pexels 35548842](https://www.pexels.com/photo/35548842/) | el jusuf |
| `about/students-with-textbooks.jpg` | /about introduction, gallery | [Pexels 14071907](https://www.pexels.com/photo/14071907/) | Fatima Yusuf |
| `admissions/smiling-students-hijab.jpg` | /admissions header | [Pexels 19986549](https://www.pexels.com/photo/19986549/) | Fatima Yusuf |
| `student-life/boys-topi-school-window.jpg` | Gallery | [Pexels 28528653](https://www.pexels.com/photo/28528653/) | Mijanur Rahman Niloy |
| `programs/early-years-girl-white-hijab.jpg` | Academics: Montessori (Playgroup–KG), gallery | [Pexels 33872960](https://www.pexels.com/photo/33872960/) | Sanusi Jabir |
| `programs/primary-girls-cream-hijab.jpg` | Academics: Primary | [Pexels 34628746](https://www.pexels.com/photo/34628746/) | Daruth Tahjeeb |
| `programs/middle-student-writing-exam.jpg` | Academics: Middle, gallery | [Pexels 19520532](https://www.pexels.com/photo/19520532/) | Muhaimin Abdul Aziz |
| `programs/secondary-student-white-hijab-writing.jpg` | Academics: Secondary (Matric), gallery | [Pexels 35865693](https://www.pexels.com/photo/35865693/) | Airlangga Jati |
| `programs/intermediate-students-classroom.jpg` | Gallery | [Pexels 17022446](https://www.pexels.com/photo/17022446/) | Pexels User |
| `classrooms/classroom-students-hijab.jpg` | /academics header, gallery | [Pexels 32711387](https://www.pexels.com/photo/32711387/) | MD Photography |
| `admissions/new-student-white-topi.jpg` | /admissions documents section, gallery | [Pexels 18751505](https://www.pexels.com/photo/18751505/) | Jalal Ahmed |
| `student-life/schoolgirls-white-hijab-smiling.jpg` | /gallery header | [Pexels 10002144](https://www.pexels.com/photo/10002144/) | Silvanus Solomon |
| `student-life/schoolgirls-white-hijab-walking.jpg` | Student life: Leadership | [Pexels 8765853](https://www.pexels.com/photo/8765853/) | Dmitry Limonov |
| `student-life/friends-white-hijab.jpg` | Student life: Friendship, gallery | [Pexels 16386683](https://www.pexels.com/photo/16386683/) | Soudha J. |
| `student-life/student-white-kurta-topi-book.jpg` | Student life: Quran & Islamic activities | [Pexels 37598778](https://www.pexels.com/photo/37598778/) | Al Hoque |
| `student-life/children-topi-celebration.jpg` | Gallery | [Pexels 38998615](https://www.pexels.com/photo/38998615/) | Juber Ahmed Sahel |

Eight images were supplied by the academy rather than taken from a stock library: `hero/islamic-school-children-classroom.jpg` (home hero and social share image) `programs/playgroup-islamic-classroom.jpg` (Playgroup card), `programs/nursery-islamic-classroom.jpg` (Nursery card) `programs/kindergarten-islamic-classroom.jpg` (Kindergarten card) `programs/huffaz-islamic-classroom.jpg` (Huffaz card) `about/islamic-classroom-learning.jpg` (home "Where Knowledge Meets Values") `huffaz/huffaz-class-with-teacher.jpg` (home "Already a Hafiz?" section) and `admissions/falah-classroom-students.jpg` (home "Begin Your Child's Learning Journey" background).

## Before you launch

Placeholders are in `[square brackets]` or marked `TODO` in the content files:

- [ ] `site.ts`: `contact.address`, `city`, `phone` + `phoneHref`, `whatsappHref`, `email` + `emailHref`, `mapEmbedUrl` / `mapLinkUrl`, `foundingYear`, social URLs. The Call / WhatsApp / Get Directions buttons (contact section, mobile menu, phone quick-contact bar) appear as soon as their links are set
- [ ] `school.ts`: Principal's name; the Principal's photo placeholder is in `src/app/about/page.tsx`
- [ ] `school.ts`: add real, consented testimonials to `testimonials` (the section is hidden while it is empty)
- [ ] `school.ts`: add verified figures (years, students, teachers, results) to `stats` (the numbers band is hidden while it is empty)
- [ ] `school.ts`: confirm the facilities list, programme grades, Intermediate details, history wording and news/event dates
- [ ] Replace the stock photographs with real photos of Falah Academy, ideally showing the school's Islamic uniform (boys: white shalwar kameez or kurta with a white topi; girls: modest uniform with a white or light-grey hijab). Start with the hero (`src/components/sections/Hero.tsx`)
- [ ] When the school has its own photos, replace the stock images in the table above (keep the file paths, or update `image` in `featuredPrograms` / `huffazEducation` in `school.ts`). A slot without `image` shows a branded panel, and in `npm run dev` it prints its `photoBrief` (the photo to take)
- [ ] Huffaz Education System: confirm the wording with the academy. No completion period, results or board outcomes are stated; add them only once confirmed
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
