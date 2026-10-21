import { Clock, EnvelopeSimple, MapPin, MapTrifold, Phone } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";
import { contactActions } from "@/lib/contact-actions";
import { isFilled } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

/** Contact details, inquiry form and map. `defaultSubject` preselects the form subject. */
export function Contact({
  id = "contact",
  title = "Get in touch with us",
  intro = "Have a question about admissions, academics or school life? Call, send us a message or visit the school office during school hours.",
  defaultSubject,
  showMap = true,
}: {
  id?: string;
  title?: string;
  intro?: string;
  defaultSubject?: string;
  showMap?: boolean;
}) {
  const { contact } = siteConfig;
  // the form is already on this section, so its own "Admission Inquiry" shortcut would just scroll in place
  const actions = contactActions().filter((a) => a.key !== "apply");
  const details = [
    { icon: MapPin, label: "School Address", value: `${contact.address}, ${contact.city}, ${contact.country}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: EnvelopeSimple, label: "Email", value: contact.email, href: contact.emailHref },
    { icon: Clock, label: "School Hours", value: `${contact.hours.days}\n${contact.hours.time}` },
  ];

  return (
    <section id={id} className="py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="min-w-0">
            <Eyebrow className="mb-4">Contact Us</Eyebrow>
            <h2 className="text-balance text-display-md font-bold text-accent-strong">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{intro}</p>

            <div className="mt-8 surface-ink rounded-xl p-6 text-white shadow-lift sm:p-8">
              <p className="font-display text-2xl font-bold">{siteConfig.name}</p>
              <ul className="mt-6 space-y-6">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-highlight">
                      <Icon size={20} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block label text-highlight">{label}</span>
                      {href ? (
                        <a href={href} className="link-underline mt-1 inline wrap-anywhere text-white/90 hover:text-white">
                          {value}
                        </a>
                      ) : (
                        <span className="mt-1 block whitespace-pre-line wrap-anywhere text-white/90">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              {actions.length > 0 && (
                <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {actions.map(({ key, label, href, icon: Icon, external }, i) => (
                    <a
                      key={key}
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className={cn(
                        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98]",
                        i === 0
                          ? "bg-highlight text-highlight-fg hover:bg-highlight-strong"
                          : "border border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.14]",
                        actions.length % 2 === 1 && i === actions.length - 1 && "sm:col-span-2"
                      )}
                    >
                      <Icon size={18} weight="fill" aria-hidden="true" />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0 card rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-accent-strong">Send us a message</h3>
            <p className="mb-6 mt-1.5 text-sm text-fg-muted">Fields marked with an asterisk are required.</p>
            <ContactForm defaultSubject={defaultSubject} />
          </Reveal>
        </div>

        {showMap && (
          <Reveal className="mt-10 overflow-hidden card rounded-xl">
            {contact.mapEmbedUrl ? (
              <iframe
                src={contact.mapEmbedUrl}
                title={`Map showing the location of ${siteConfig.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-80 w-full border-0 sm:h-96"
              />
            ) : (
              <div className="surface-tint flex h-72 flex-col items-center justify-center gap-3 px-6 text-center sm:h-80">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <MapTrifold size={28} weight="duotone" aria-hidden="true" />
                </span>
                <p className="font-display text-title font-bold text-accent-strong">Find us on the map</p>
                <p className="max-w-sm text-sm text-fg-muted">
                  {isFilled(contact.address)
                    ? `${contact.address}, ${contact.city}.`
                    : "Our location map will appear here."}{" "}
                  Call or visit the school office for directions.
                </p>
              </div>
            )}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
