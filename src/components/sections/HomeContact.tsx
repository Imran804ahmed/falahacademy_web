import type { Icon as IconType } from "@phosphor-icons/react";
import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { contactActions } from "@/lib/contact-actions";
import { isFilled } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

/**
 * Home: closing contact band. Shows only details that are filled in `site.ts`, the
 * direct actions (Call / WhatsApp / Directions) once their links are set, and a link
 * to the full contact page with the form and map.
 */
export function HomeContact() {
  const { contact } = siteConfig;
  const address = [contact.address, contact.city, contact.country].filter(isFilled).join(", ");
  type Detail = { icon: IconType; label: string; value: string; href?: string };
  const details = (
    [
      { icon: MapPin, label: "Campus", value: address },
      isFilled(contact.phone) && { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
      isFilled(contact.email) && { icon: EnvelopeSimple, label: "Email", value: contact.email, href: contact.emailHref },
      { icon: Clock, label: "School Hours", value: `${contact.hours.days}, ${contact.hours.time}` },
    ] as (Detail | false)[]
  ).filter((d): d is Detail => Boolean(d));
  const actions = contactActions().filter((a) => a.key !== "apply");

  return (
    <section id="contact" className="py-section-sm">
      <Container>
        <div className="surface-ink grid gap-10 rounded-xl px-6 py-10 text-white shadow-deep sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-balance text-display-md font-bold text-white">Visit or contact us</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">
              Have a question about admissions or classes? Call, message or visit the school office during school hours.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-highlight">
                    <Icon size={20} weight="duotone" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block label text-highlight">{label}</span>
                    {href ? (
                      <a href={href} className="link-underline mt-1 inline wrap-anywhere text-white/90 hover:text-white">
                        {value}
                      </a>
                    ) : (
                      <span className="mt-1 block wrap-anywhere text-white/90">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-60 lg:flex-col">
            {actions.map(({ key, label, href, icon: Icon, external }, i) => (
              <a
                key={key}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-colors duration-300",
                  i === 0
                    ? "bg-highlight text-highlight-fg hover:bg-highlight-strong"
                    : "border border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.14]"
                )}
              >
                <Icon size={18} weight="fill" aria-hidden="true" />
                {label}
              </a>
            ))}
            <Button href="/contact" variant="onDark" showArrow={false}>
              Contact Page
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
