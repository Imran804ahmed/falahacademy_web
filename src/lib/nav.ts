/** A nav item is active on its own route and any route nested under it. */
export const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
