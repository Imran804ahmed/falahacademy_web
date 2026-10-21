import Link from "next/link";
import {
  ArrowUp,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/content/site";
import { programs } from "@/content/school";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const socials = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookLogo },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramLogo },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YoutubeLogo },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinLogo },
];

const headingClasses = "font-sans label text-highlight";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 py-1 text-sm text-fg-inverted-muted transition-colors duration-200 hover:text-white pointer-coarse:min-h-11"
    >
      <span className="h-px w-0 bg-highlight transition-[width] duration-300 group-hover:w-3 motion-reduce:transition-none" />
      {children}
    </Link>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className={headingClasses}>{title}</h2>
      <ul className="mt-6 space-y-1.5 pointer-coarse:space-y-0">
        {links.map((l) => (
          <li key={l.href}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;

  return (
    <footer className="surface-footer">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-highlight/60 to-transparent"
      />

      <Container className="relative">
        {/* action strip */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 sm:py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-[1.75rem]">
              {siteConfig.tagline}
            </p>
            <p className="mt-1.5 text-sm text-fg-inverted-muted">
              Montessori to Intermediate · School office: {contact.hours.days}, {contact.hours.time}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.applyHref} variant="highlight" size="sm">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="onDark" size="sm" showArrow={false}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 sm:grid-cols-3 sm:gap-x-8 sm:py-16 lg:grid-cols-[1.3fr_0.75fr_0.75fr_0.8fr_1.2fr] lg:gap-x-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex rounded-lg">
              <Logo tone="light" className="h-16" />
              <span className="sr-only">, home</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-fg-inverted-muted">{siteConfig.description}</p>
            <ul className="mt-6 flex gap-2.5" aria-label="Social media">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-highlight hover:bg-highlight hover:text-highlight-fg"
                    >
                      <Icon size={18} weight="fill" />
                    </a>
                  ) : (
                    <span
                      title={`${label} (coming soon)`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70"
                    >
                      <Icon size={18} weight="fill" aria-hidden="true" />
                      <span className="sr-only">{label} (coming soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Explore" links={siteConfig.footer.explore} />
          <FooterColumn
            title="Academics"
            links={programs.map((p) => ({ label: p.short, href: `/academics#${p.slug}` }))}
          />
          <FooterColumn title="Admissions" links={siteConfig.footer.admissions} />

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h2 className={headingClasses}>Contact Information</h2>
            <ul className="mt-6 space-y-3.5 text-sm text-fg-inverted-muted">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-highlight">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span className="min-w-0 wrap-anywhere">
                  <span className="sr-only">Address: </span>
                  {contact.address}, {contact.city}, {contact.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-highlight">
                  <Phone size={17} aria-hidden="true" />
                </span>
                <span className="sr-only">Phone: </span>
                {contact.phoneHref ? (
                  <a
                    href={contact.phoneHref}
                    className="link-underline min-w-0 wrap-anywhere transition-colors hover:text-white"
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <span className="min-w-0 wrap-anywhere">{contact.phone}</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-highlight">
                  <EnvelopeSimple size={17} aria-hidden="true" />
                </span>
                <span className="sr-only">Email: </span>
                {contact.emailHref ? (
                  <a
                    href={contact.emailHref}
                    className="link-underline min-w-0 wrap-anywhere transition-colors hover:text-white"
                  >
                    {contact.email}
                  </a>
                ) : (
                  <span className="min-w-0 wrap-anywhere">{contact.email}</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-highlight">
                  <Clock size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="sr-only">School hours: </span>
                  {contact.hours.days}
                  <br />
                  {contact.hours.time}
                </span>
              </li>
            </ul>
            {contact.mapEmbedUrl && (
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src={contact.mapEmbedUrl}
                  title={`Map showing the location of ${siteConfig.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-44 w-full border-0"
                />
              </div>
            )}
            {contact.mapLinkUrl && (
              <a
                href={contact.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-highlight transition-colors hover:text-white"
              >
                Get Directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/[0.08] py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/65 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#main-content"
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-white/75 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={13} weight="bold" aria-hidden="true" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
