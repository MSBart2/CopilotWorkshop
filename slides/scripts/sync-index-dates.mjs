#!/usr/bin/env node
// ============================================================================
// sync-index-dates.mjs — Regenerate SLIDE_DATES in index-custom.html
// ============================================================================
//
// Reads the "updated:" field from every slide's YAML frontmatter and writes
// the SLIDE_DATES map into slides/index-custom.html so the "NEW" badge
// appears automatically for slides updated within the last 7 days.
//
// Usage:
//   node slides/scripts/sync-index-dates.mjs          (from repo root)
//   node slides/scripts/sync-index-dates.mjs --check  (exit 1 if out of sync)
//
// ============================================================================

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Collect updated dates from slide frontmatter
function collectDates() {
  const dates = {};
  const dirs = ["tech-talks", "exec-talks"];

  for (const dir of dirs) {
    const folder = join(ROOT, dir);
    let files;
    try {
      files = readdirSync(folder).filter((f) => f.endsWith(".md"));
    } catch {
      continue;
    }

    for (const file of files) {
      const slug = basename(file, ".md");
      // Skip non-slide files (global-top, global-bottom, etc.)
      if (["global-top", "global-bottom"].includes(slug)) continue;

      const content = readFileSync(join(folder, file), "utf8");
      const match = content.match(/^updated:\s*(\d{4}-\d{2}-\d{2})/m);
      if (match) {
        dates[slug] = match[1];
      }
    }
  }

  return dates;
}

// Format dates map as JS object literal (indented for readability)
function formatDatesMap(dates) {
  const entries = Object.entries(dates)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug, date]) => `      '${slug}': '${date}',`)
    .join("\n");
  return `const SLIDE_DATES = {\n${entries}\n    };`;
}

// Main
const dates = collectDates();
const newMap = formatDatesMap(dates);

const indexPath = join(ROOT, "index-custom.html");
const html = readFileSync(indexPath, "utf8");

// Replace the existing SLIDE_DATES block
const pattern = /const SLIDE_DATES = \{[\s\S]*?\};/;
if (!pattern.test(html)) {
  console.error("❌ Could not find SLIDE_DATES block in index-custom.html");
  process.exit(1);
}

const updated = html.replace(pattern, newMap);

if (process.argv.includes("--check")) {
  if (html === updated) {
    console.log("✅ SLIDE_DATES is in sync with frontmatter");
    process.exit(0);
  } else {
    console.error(
      "❌ SLIDE_DATES is out of sync — run: node slides/scripts/sync-index-dates.mjs",
    );
    process.exit(1);
  }
}

writeFileSync(indexPath, updated);
console.log(`✅ Updated SLIDE_DATES with ${Object.keys(dates).length} entries`);

// Show which slides are "new" (within 7 days)
const now = new Date();
const oneWeek = 7 * 24 * 60 * 60 * 1000;
const newSlides = Object.entries(dates).filter(
  ([, d]) => now - new Date(d + "T00:00:00") < oneWeek,
);
if (newSlides.length > 0) {
  console.log(
    `🆕 Slides with NEW badge: ${newSlides.map(([s]) => s).join(", ")}`,
  );
} else {
  console.log("   (no slides within the 7-day NEW window)");
}
