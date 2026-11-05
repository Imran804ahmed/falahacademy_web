/**
 * Runs after `next build`.
 *
 * 1. Everything under out/_next/static/ has a content hash in its filename, so it can be cached
 *    by browsers for a year without revalidating. Apache / LiteSpeed apply this per-directory
 *    .htaccess on top of out/.htaccess (from public/).
 * 2. public/images/ holds the full-size originals that scripts/optimize-images.mjs renders from.
 *    Pages load the img-opt/ renditions instead, so originals that no built file links to
 *    (e.g. the structured-data logo still is) are dropped from out/ rather than uploaded.
 */
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const out = path.resolve(import.meta.dirname, "../out");
const dir = path.join(out, "_next/static");

await writeFile(
  path.join(dir, ".htaccess"),
  `# written by scripts/postbuild.mjs: hashed build assets never change
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</IfModule>
<IfModule mod_headers.c>
  Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>
`
);
console.log("postbuild: wrote out/_next/static/.htaccess");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])));
  return files.flat();
}

// A real link is an attribute value, a CSS url() or an absolute URL (Open Graph, JSON-LD). A bare
// "/images/..." string inside the RSC payload is only next/image's key for the img-opt variants.
const linkPattern = /(?:="|url\(["']?|https?:\/\/[^"'\s]+?)(\/images\/[^"')\s?#]+)/g;
const linked = new Set();
for (const file of await walk(out)) {
  if (!/\.(html|txt|xml|css|json|webmanifest)$/.test(file) || file.startsWith(path.join(out, "images"))) continue;
  for (const [, url] of (await readFile(file, "utf8")).matchAll(linkPattern)) linked.add(decodeURI(url));
}

const originals = await walk(path.join(out, "images"));
const unlinked = originals.filter((f) => !linked.has("/" + path.relative(out, f).split(path.sep).join("/")));
await Promise.all(unlinked.map((f) => rm(f)));
console.log(`postbuild: kept ${originals.length - unlinked.length} linked originals in out/images, dropped ${unlinked.length}`);
