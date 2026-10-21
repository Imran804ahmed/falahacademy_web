import type { Icon } from "@phosphor-icons/react";
import { MapPin, NotePencil, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/content/site";

export type ContactAction = { key: string; label: string; short: string; href: string; icon: Icon; external?: boolean };

/**
 * The direct ways to reach the school: Call, WhatsApp, Directions and the admission
 * inquiry form. Each one appears only once its link is filled in `site.ts`, so a
 * visitor never taps a button that goes nowhere.
 */
export function contactActions(): ContactAction[] {
  const { contact, applyHref } = siteConfig;
  const actions: (ContactAction | false)[] = [
    Boolean(contact.phoneHref) && { key: "call", label: "Call Now", short: "Call", href: contact.phoneHref, icon: Phone },
    Boolean(contact.whatsappHref) && {
      key: "whatsapp",
      label: "WhatsApp Us",
      short: "WhatsApp",
      href: contact.whatsappHref,
      icon: WhatsappLogo,
      external: true,
    },
    Boolean(contact.mapLinkUrl) && {
      key: "directions",
      label: "Get Directions",
      short: "Directions",
      href: contact.mapLinkUrl,
      icon: MapPin,
      external: true,
    },
    { key: "apply", label: "Admission Inquiry", short: "Admissions", href: applyHref, icon: NotePencil },
  ];
  return actions.filter((a): a is ContactAction => Boolean(a));
}
