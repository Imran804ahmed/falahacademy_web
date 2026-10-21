/** Re-mounts on every navigation, giving each page a short, calm rise-in (CSS transform only). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
