#!/usr/bin/env node
// ============================================================================
// add-index-card.mjs — Add a navigation card to index-custom.html
// ============================================================================
//
// Adds a card for a new tech talk or exec talk to the correct sub-group in
// slides/index-custom.html.  Idempotent — skips if a card with the same
// href already exists.
//
// Usage (from repo root):
//   node slides/scripts/add-index-card.mjs \
//     --topic  copilot-acp \
//     --title  "Copilot ACP" \
//     --desc   "The Agent Client Protocol for universal AI integration." \
//     --section "Context & Customization"
//
// Options:
//   --topic    Slug (e.g. "copilot-acp")                       [required]
//   --title    Display title (e.g. "Copilot ACP")              [required]
//   --desc     One-line description for the card                [required]
//   --section  Sub-group in index-custom.html                   [required]
//              One of: "Copilot Surfaces", "Context & Customization",
//              "Agent Architecture", "Agentic Transformation",
//              "Executive Talks"
//   --category "tech-talks" (default) or "exec-talks"
//   --check    Exit 1 if card is missing (dry-run mode)
//
// ============================================================================

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const INDEX_PATH = join(ROOT, "index-custom.html");

// ── Argument parsing ────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--check") {
      args.check = true;
    } else if (argv[i].startsWith("--") && i + 1 < argv.length) {
      args[argv[i].slice(2)] = argv[++i];
    }
  }
  return args;
}

const args = parseArgs(process.argv);
const { topic, title, desc, section, category = "tech-talks", check } = args;

if (!topic || !title || !desc || !section) {
  console.error(
    "Usage: add-index-card.mjs --topic <slug> --title <name> --desc <text> --section <group> [--category tech-talks|exec-talks] [--check]",
  );
  console.error(
    'Sections: "Copilot Surfaces", "Context & Customization", "Agent Architecture", "Agentic Transformation", "Executive Talks"',
  );
  process.exit(1);
}

// ── Section → sub-group-label mapping ───────────────────────────────────────
const VALID_SECTIONS = [
  "Copilot Surfaces",
  "Context & Customization",
  "Agent Architecture",
  "Agentic Transformation",
  "Executive Talks",
];

if (!VALID_SECTIONS.includes(section)) {
  console.error(`❌ Unknown section: "${section}"`);
  console.error(`   Valid: ${VALID_SECTIONS.join(", ")}`);
  process.exit(1);
}

// ── Read index ──────────────────────────────────────────────────────────────
const html = readFileSync(INDEX_PATH, "utf8");

// Idempotency: skip if card already exists
const href = `/CopilotTraining/${category}/${topic}/`;
if (html.includes(`href="${href}"`)) {
  console.log(`✅ Card for "${topic}" already exists in index-custom.html`);
  process.exit(0);
}

// In --check mode, report missing and exit 1
if (check) {
  console.error(
    `❌ Card for "${topic}" is missing from index-custom.html`,
  );
  process.exit(1);
}

// ── Build the new card HTML ─────────────────────────────────────────────────
const indent = section === "Executive Talks" ? "        " : "          ";
const card = [
  `${indent}<a href="${href}" class="card">`,
  `${indent}  <h2>${title}</h2>`,
  `${indent}  <p>${desc}</p>`,
  `${indent}</a>`,
].join("\n");

// ── Find insertion point ────────────────────────────────────────────────────
let insertIndex = -1;

if (section === "Executive Talks") {
  // Exec-talks: insert before the closing </div> of the exec-talks grid.
  // Locate the grid by the section class, then find the last </a> inside it.
  const execSectionStart = html.indexOf('class="section exec-talks"');
  if (execSectionStart === -1) {
    console.error("❌ Could not find exec-talks section in index-custom.html");
    process.exit(1);
  }
  const gridStart = html.indexOf('<div class="grid">', execSectionStart);
  const gridClose = html.indexOf("</div>", gridStart + 18);
  const lastCard = html.lastIndexOf("</a>", gridClose);
  insertIndex = lastCard + "</a>".length;
} else {
  // Tech-talks: find the sub-group by its label text, then the grid's last card
  const labelTag = `<span class="sub-group-label">${section}</span>`;
  const labelPos = html.indexOf(labelTag);
  if (labelPos === -1) {
    console.error(
      `❌ Could not find sub-group "${section}" in index-custom.html`,
    );
    process.exit(1);
  }
  const gridStart = html.indexOf('<div class="grid">', labelPos);
  const gridClose = html.indexOf("</div>", gridStart + 18);
  const lastCard = html.lastIndexOf("</a>", gridClose);
  insertIndex = lastCard + "</a>".length;
}

if (insertIndex <= 0) {
  console.error(`❌ Could not find insertion point for section "${section}"`);
  process.exit(1);
}

// ── Insert and write ────────────────────────────────────────────────────────
const updated = html.slice(0, insertIndex) + "\n" + card + html.slice(insertIndex);
writeFileSync(INDEX_PATH, updated);
console.log(
  `✅ Added "${title}" card to "${section}" in index-custom.html`,
);
