/**
 * Pre-generates the responsive image set that `src/lib/image-loader.ts` points at.
 *
 * The site is a static export, so Next's on-demand optimizer isn't available. Instead,
 * every original in public/images/<path>.<ext> is rendered once per next/image width into
 *   public/img-opt/<path>-<width>.webp   (every image)
 *   public/img-opt/<path>-<width>.avif   (full-bleed backdrops listed in image-config.json)
 *   public/img-opt/<path>-og.jpg         (1200x630 social share card, for sources listed under "og")
 * with EXIF / GPS / camera metadata stripped, and its dimensions plus a tiny blur
 * placeholder are recorded in src/lib/image-manifest.json. A short content hash per source goes
 * to src/lib/image-versions.json, which the loader appends as ?v= so a replaced photo gets a new
 * URL instead of being served stale from browser and CDN caches.
 *
 * Incremental: a source is only re-encoded when its content hash changes or an output is
 * missing. Variants whose original was removed are deleted.
 *
 *   npm run images            # update
 *   npm run images -- --force # re-encode everything
 */
import { createHash } from "node:crypto";
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(root, "public/images");
const OUT_DIR = path.join(root, "public/img-opt");
const CONFIG = path.join(root, "src/lib/image-config.json");
const MANIFEST = path.join(root, "src/lib/image-manifest.json");
const VERSIONS = path.join(root, "src/lib/image-versions.json");
const SOURCE_EXT = /\.(jpe?g|png|webp)$/i;
const force = process.argv.includes("--force");

const config = JSON.parse(await readFile(CONFIG, "utf8"));
const widths = [...config.imageSizes, ...config.deviceSizes].sort((a, b) => a - b);
const avifSources = new Set(config.avif);
const ogSources = new Set(config.og ?? []);

/** Larger renditions are the ones seen on big screens / as heroes, so they get more bits. */
const webpOptions = (width, isGraphic) =>
  isGraphic
    ? { quality: 90, alphaQuality: 100, effort: 6 } // logos: keep edges crisp
    : { quality: width >= 1200 ? 78 : width >= 640 ? 75 : 70, effort: 6 };
const avifOptions = { quality: 55, effort: 4 };
// link previews: JPEG because not every crawler reads WebP, and small enough (<300 KB) for WhatsApp
const OG = { width: 1200, height: 630 };
const ogOptions = { quality: 82, mozjpeg: true };

async function walk(dir, pattern) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) return walk(full, pattern);
      return pattern.test(e.name) ? [full] : [];
    })
  );
  return files.flat();
}

const exists = (file) => stat(file).then(() => true, () => false);

let previous = {};
try {
  previous = JSON.parse(await readFile(MANIFEST, "utf8"));
} catch {}

const sources = (await walk(SRC_DIR, SOURCE_EXT)).sort();
const manifest = {};
const expected = new Set();
let encoded = 0;

async function processSource(file) {
  const rel = path.relative(SRC_DIR, file).split(path.sep).join("/");
  const key = `/images/${rel}`;
  const stem = rel.replace(SOURCE_EXT, "");
  const isGraphic = /\.png$/i.test(file);
  const withAvif = avifSources.has(key);
  const withOg = ogSources.has(key);

  const buffer = await readFile(file);
  const hash = createHash("sha1").update(buffer).digest("hex").slice(0, 16);

  const outputs = widths.flatMap((w) => [
    { w, format: "webp" },
    ...(withAvif && config.deviceSizes.includes(w) ? [{ w, format: "avif" }] : []),
  ]);
  for (const o of outputs) o.file = path.join(OUT_DIR, `${stem}-${o.w}.${o.format}`);
  if (withOg) outputs.push({ format: "og", file: path.join(OUT_DIR, `${stem}-og.jpg`) });
  for (const o of outputs) expected.add(o.file);

  const prev = previous[key];
  const upToDate =
    !force && prev?.hash === hash && (await Promise.all(outputs.map((o) => exists(o.file)))).every(Boolean);
  if (upToDate) {
    manifest[key] = prev;
    return;
  }

  // .rotate() applies the EXIF orientation before the metadata is dropped
  const { width, height } = await sharp(buffer).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
  await mkdir(path.dirname(path.join(OUT_DIR, stem)), { recursive: true });

  for (const o of outputs) {
    if (o.format === "og") {
      await sharp(buffer).rotate().resize({ ...OG, fit: "cover" }).jpeg(ogOptions).toFile(o.file);
      continue;
    }
    // never upscale; a source that is already a WebP at this size is copied, not re-encoded
    if (o.format === "webp" && /\.webp$/i.test(file) && o.w >= width) {
      await copyFile(file, o.file);
      continue;
    }
    const pipeline = sharp(buffer).rotate().resize({ width: o.w, withoutEnlargement: true });
    await (o.format === "avif" ? pipeline.avif(avifOptions) : pipeline.webp(webpOptions(o.w, isGraphic))).toFile(o.file);
  }

  const blur = await sharp(buffer).rotate().resize({ width: 10 }).webp({ quality: 40 }).toBuffer();
  manifest[key] = { width, height, hash, blurDataURL: `data:image/webp;base64,${blur.toString("base64")}` };
  encoded++;
  console.log(`  ${key} (${width}x${height})${withAvif ? " +avif" : ""}${withOg ? " +og" : ""}`);
}

// sharp is already multi-threaded per image; a small pool keeps every core busy
const queue = [...sources];
await Promise.all(
  Array.from({ length: Math.max(2, Math.floor(availableParallelism() / 2)) }, async () => {
    while (queue.length) await processSource(queue.shift());
  })
);

const stale = (await walk(OUT_DIR, /\.(webp|avif|jpg)$/i).catch(() => [])).filter((f) => !expected.has(f));
await Promise.all(stale.map((f) => rm(f)));

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
// ships in client JS (the loader runs in the browser too), so only the first 8 hex digits
const versions = Object.fromEntries(Object.entries(sorted).map(([k, v]) => [k, v.hash.slice(0, 8)]));
await writeFile(VERSIONS, JSON.stringify(versions, null, 2) + "\n");

console.log(`images: ${sources.length} sources, ${encoded} encoded, ${sources.length - encoded} up to date, ${stale.length} stale variants removed`);
