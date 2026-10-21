import Link from "next/link";
import { ChatsCircle } from "@phosphor-icons/react/dist/ssr";
import { contactActions } from "@/lib/contact-actions";
import { cn } from "@/lib/cn";

/**
 * Phone-only bar pinned to the bottom of the screen: Call | WhatsApp | Admissions.
 * Directions stay on the contact page; until a phone number or WhatsApp link is
 * set, the bar offers the contact page alongside admissions instead.
 */
export function QuickContactBar() {
  const actions = contactActions().filter((a) => a.key !== "directions");
  const items =
    actions.length > 1
      ? actions
      : [{ key: "contact", short: "Contact", href: "/contact", icon: ChatsCircle, external: false }, ...actions];

  return (
    <nav
      id="quick-contact"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_-18px_rgb(7_29_61/0.4)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-lg">
        {items.map(({ key, short, href, icon: Icon, external }) => {
          const primary = key === "apply";
          const cls = cn(
            "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.75rem] font-bold transition-colors active:scale-[0.97]",
            primary ? "bg-accent text-white" : "text-accent-strong hover:bg-accent-soft"
          );
          const content = (
            <>
              <Icon size={20} weight={primary ? "fill" : "duotone"} aria-hidden="true" />
              {short}
            </>
          );
          return (
            <li key={key} className="flex-1">
              {external || href.startsWith("tel:") ? (
                <a href={href} className={cls} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                  {content}
                </a>
              ) : (
                <Link href={href} className={cls}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
