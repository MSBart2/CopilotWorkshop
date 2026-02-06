#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const dirs = [
  { base: "tech-talks", prefix: "tech-talks" },
  { base: "exec-talks", prefix: "exec-talks" },
];

for (const { base, prefix } of dirs) {
  const dirPath = path.join(__dirname, base);
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // Check if module field already exists
    if (content.includes("module:")) {
      console.log(`Skipping ${prefix}/${file} - already has module field`);
      continue;
    }

    // Extract the module name from filename (remove .md extension)
    const moduleName = file.replace(/\.md$/, "");
    const modulePath = `${prefix}/${moduleName}`;

    // Find the frontmatter and add module field before mdc: true
    const regex = /(---[\s\S]*?title: [^\n]+\n)(mdc: true\n---)/;
    const match = content.match(regex);

    if (match) {
      const replacement = `${match[1]}module: ${modulePath}\n${match[2]}`;
      content = content.replace(regex, replacement);
      fs.writeFileSync(filePath, content, "utf-8");
      console.log(`✅ Updated ${prefix}/${file}`);
    } else {
      console.log(`⚠️ Could not find frontmatter pattern in ${prefix}/${file}`);
    }
  }
}

console.log("\n✨ Done!");
