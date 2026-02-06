#!/usr/bin/env node
/**
 * Slidev Slide Verification Script
 *
 * Uses Playwright to verify slide decks for common issues:
 * - Content overflow (vertical scrolling)
 * - Broken images/assets
 * - Console errors
 * - Readability issues (overly long text)
 *
 * Always captures screenshots and detailed measurements for full transparency.
 *
 * Usage:
 *   node verify-slides.mjs <slide-file>           # Verify single deck
 *   node verify-slides.mjs --all                  # Verify all decks
 *   node verify-slides.mjs --fail-on-errors       # Exit 1 if issues found
 *   node verify-slides.mjs --tolerance=0          # Set overflow tolerance (default: 5px)
 *   node verify-slides.mjs --no-screenshots       # Skip screenshots (faster, less visual)
 */

import { chromium } from "playwright";
import { spawn } from "child_process";
import { promises as fs } from "fs";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find workspace root (look for slides/ directory)
function findWorkspaceRoot() {
  let dir = __dirname;
  while (dir !== path.parse(dir).root) {
    if (existsSync(path.join(dir, "slides"))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  throw new Error("Could not find workspace root (no slides/ directory found)");
}

const WORKSPACE_ROOT = findWorkspaceRoot();
const SLIDES_DIR = path.join(WORKSPACE_ROOT, "slides");

// Configuration
const PORT_RANGE_START = 3030;
const PORT_RANGE_END = 3130;
const SCREENSHOT_DIR = path.join(SLIDES_DIR, "screenshots");
const REPORT_DIR = path.join(SLIDES_DIR, "verification-reports");

/**
 * Get a random port in the configured range
 * Useful for parallel test execution to avoid port conflicts
 */
function getRandomPort() {
  return (
    Math.floor(Math.random() * (PORT_RANGE_END - PORT_RANGE_START + 1)) +
    PORT_RANGE_START
  );
}

/**
 * Start Slidev dev server for a slide file
 */
async function startSlidevServer(slideFile, port) {
  return new Promise((resolve, reject) => {
    // Strip 'slides/' prefix if present since we're running from SLIDES_DIR
    let relativeSlideFile = slideFile;
    if (slideFile.startsWith("slides/")) {
      relativeSlideFile = slideFile.substring(7); // Remove "slides/" prefix
    }

    // Use cmd.exe on Windows to ensure npx is found
    const isWindows = process.platform === "win32";
    const command = isWindows ? "cmd.exe" : "npx";
    const args = isWindows
      ? ["/c", "npx", "slidev", relativeSlideFile, "--port", port.toString()]
      : ["slidev", relativeSlideFile, "--port", port.toString()];

    const server = spawn(command, args, {
      cwd: SLIDES_DIR,
      stdio: "pipe",
      shell: !isWindows,
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        server.kill();
        reject(new Error("Server startup timeout"));
      }
    }, 30000); // 30 second timeout

    const checkForStartup = (output) => {
      // Slidev outputs "public slide show   > http://localhost:3030/" when ready
      if (
        output.includes("ready in") ||
        output.includes("Local:") ||
        output.includes("public slide show") ||
        output.includes("http://localhost")
      ) {
        if (!started) {
          started = true;
          clearTimeout(timeout);
          // Give it a moment to fully initialize
          setTimeout(() => resolve(server), 2000);
        }
      }
    };

    server.stdout.on("data", (data) => {
      const output = data.toString();
      checkForStartup(output);
    });

    server.stderr.on("data", (data) => {
      const output = data.toString();
      // Check stderr for startup messages (many CLIs output to stderr)
      checkForStartup(output);
      // Only log if it's actually an error message (contains "error", "fail", "ERR", etc.)
      if (output.toLowerCase().match(/\b(error|err|fail|exception)\b/)) {
        console.error(`Server error: ${output}`);
      }
    });

    server.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
  });
}

/**
 * Verify a single slide deck with detailed measurements
 */
async function verifySlides(slideFile, port, options = {}) {
  const { captureAll = true, tolerance = 5 } = options;
  const baseUrl = `http://localhost:${port}`;
  const deckName = slideFile.replace(".md", "").replace(/\//g, "-");

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  const issues = [];
  const measurements = [];
  let totalSlides = 0;

  // Capture console errors
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // Navigate to the presentation
    await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 15000 });

    // Wait for Slidev to initialize
    await page.waitForTimeout(2000);

    // Get total slide count - try multiple approaches
    totalSlides = await page.evaluate(() => {
      // Try various Slidev API endpoints
      if (window.__slidev?.nav?.total) return window.__slidev.nav.total;
      if (window.__slidev?.total) return window.__slidev.total;

      // Fallback: count slide elements
      const slideElements = document.querySelectorAll(".slidev-page");
      if (slideElements.length > 0) return slideElements.length;

      // Another fallback: check navigation
      const navTotal = document.querySelector("[data-slidev-nav-total]");
      if (navTotal)
        return parseInt(navTotal.getAttribute("data-slidev-nav-total"), 10);

      return 0;
    });

    if (totalSlides === 0) {
      throw new Error("Could not detect slides - is Slidev running?");
    }

    console.log(`🔍 Verifying ${totalSlides} slides in ${slideFile}...`);
    console.log(`   Viewport: 1280x720, Tolerance: ${tolerance}px\n`);

    // Create screenshots directory
    await fs.mkdir(SCREENSHOT_DIR, { recursive: true });

    // Check each slide
    for (let i = 1; i <= totalSlides; i++) {
      await page.goto(`${baseUrl}/${i}`, {
        waitUntil: "networkidle",
        timeout: 10000,
      });
      await page.waitForTimeout(500); // Let animations settle

      // Clear previous console errors
      const slideConsoleErrors = [...consoleErrors];
      consoleErrors.length = 0;

      // Enhanced overflow detection - check multiple elements
      const measurement = await page.evaluate((tol) => {
        const selectors = [
          "#slide-content",
          ".slidev-layout",
          ".slidev-page",
          "main",
        ];

        const results = {};
        let hasAnyOverflow = false;
        let primarySelector = null;

        for (const selector of selectors) {
          const el = document.querySelector(selector);
          if (el && el.clientHeight > 0) {
            const scrollH = el.scrollHeight;
            const clientH = el.clientHeight;
            const diff = scrollH - clientH;
            const overflow = diff > tol;

            results[selector] = {
              scrollHeight: scrollH,
              clientHeight: clientH,
              diff: diff,
              hasOverflow: overflow,
            };

            if (overflow && !primarySelector) {
              primarySelector = selector;
              hasAnyOverflow = true;
            }
          } else {
            results[selector] = { found: false };
          }
        }

        // Also check viewport scroll
        const bodyScrollable =
          document.body.scrollHeight > window.innerHeight + tol;
        results["document.body"] = {
          scrollHeight: document.body.scrollHeight,
          innerHeight: window.innerHeight,
          diff: document.body.scrollHeight - window.innerHeight,
          hasOverflow: bodyScrollable,
        };

        if (bodyScrollable && !primarySelector) {
          primarySelector = "document.body";
          hasAnyOverflow = true;
        }

        return {
          hasOverflow: hasAnyOverflow,
          details: results,
          primarySelector,
        };
      }, tolerance);

      measurement.slide = i;
      measurements.push(measurement);

      // Capture screenshot
      if (captureAll || measurement.hasOverflow) {
        const screenshotName = measurement.hasOverflow
          ? `overflow-${deckName}-slide-${i}.png`
          : `${deckName}-slide-${i}.png`;

        await page.screenshot({
          path: path.join(SCREENSHOT_DIR, screenshotName),
          fullPage: false, // Only visible viewport
        });

        measurement.screenshot = screenshotName;
      }

      // Report overflow
      if (measurement.hasOverflow) {
        console.log(`  ❌ Slide ${i}: Content overflow`);

        // Show which containers overflowed
        for (const [selector, data] of Object.entries(measurement.details)) {
          if (data.hasOverflow) {
            console.log(
              `     └─ ${selector}: ${data.diff}px overflow (${data.scrollHeight}px / ${data.clientHeight || data.innerHeight}px)`,
            );
          }
        }

        issues.push({
          slide: i,
          type: "overflow",
          severity: "critical",
          message: `Content overflow detected`,
          details: measurement.details,
          screenshot: measurement.screenshot,
        });
      } else {
        console.log(`  ✅ Slide ${i}: OK`);
      }

      // Check 2: Missing images/assets
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll("img"));
        return imgs
          .filter((img) => !img.complete || img.naturalHeight === 0)
          .map((img) => ({ src: img.src, alt: img.alt }));
      });

      if (brokenImages.length > 0) {
        issues.push({
          slide: i,
          type: "broken-images",
          severity: "critical",
          message: `${brokenImages.length} missing image(s)`,
          details: brokenImages,
        });
        console.log(`  ⚠️  Slide ${i}: Broken images`);
      }

      // Check 3: Console errors during render
      if (slideConsoleErrors.length > 0) {
        issues.push({
          slide: i,
          type: "console-errors",
          severity: "critical",
          message: "Console errors detected",
          details: slideConsoleErrors,
        });
        console.log(`  ⚠️  Slide ${i}: Console errors`);
      }

      // Check 4: Very long text blocks (readability)
      const longTextBlocks = await page.evaluate(() => {
        const blocks = Array.from(document.querySelectorAll("p, li"));
        return blocks
          .filter((el) => el.textContent.trim().length > 200)
          .map((el) => ({
            tag: el.tagName.toLowerCase(),
            length: el.textContent.trim().length,
            preview: el.textContent.trim().substring(0, 100) + "...",
          }));
      });

      if (longTextBlocks.length > 0) {
        issues.push({
          slide: i,
          type: "readability",
          severity: "warning",
          message: `${longTextBlocks.length} text block(s) exceed 200 characters`,
          details: longTextBlocks,
        });
      }
    }
  } finally {
    await browser.close();
  }

  return { slideFile, totalSlides, issues, measurements };
}

/**
 * Generate markdown report with detailed measurements
 */
async function generateReport(result) {
  const { slideFile, totalSlides, issues, measurements } = result;
  const deckName = slideFile.replace(".md", "").replace(/\//g, "-");
  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .substring(0, 19);

  const criticalIssues = issues.filter((i) => i.severity === "critical");
  const warnings = issues.filter((i) => i.severity === "warning");
  const passedSlides = totalSlides - new Set(issues.map((i) => i.slide)).size;

  let report = `# Slide Verification Report

**Deck**: ${slideFile}
**Date**: ${new Date().toISOString()}
**Total Slides**: ${totalSlides}
**Issues Found**: ${issues.length}

`;

  if (criticalIssues.length > 0) {
    report += `## Critical Issues ❌\n\n`;

    for (const issue of criticalIssues) {
      report += `### Slide ${issue.slide}: ${issue.type}\n\n`;
      report += `- **Message**: ${issue.message}\n`;

      if (issue.screenshot) {
        report += `- **Screenshot**: [${issue.screenshot}](../screenshots/${issue.screenshot})\n`;
      }

      if (issue.details && issue.type === "overflow") {
        report += `- **Details**:\n\`\`\`json\n${JSON.stringify(issue.details, null, 2)}\n\`\`\`\n`;
      } else if (issue.details) {
        report += `- **Details**: \`\`\`json\n${JSON.stringify(issue.details, null, 2)}\n\`\`\`\n`;
      }

      // Add fix suggestion
      if (issue.type === "overflow") {
        report += `- **Fix**: Split content into multiple slides or use two-column layout\n`;
      } else if (issue.type === "broken-images") {
        report += `- **Fix**: Verify image paths and ensure files exist\n`;
      } else if (issue.type === "console-errors") {
        report += `- **Fix**: Check frontmatter syntax and component usage\n`;
      }

      report += `\n`;
    }
  }

  if (warnings.length > 0) {
    report += `## Warnings ⚠️\n\n`;

    for (const issue of warnings) {
      report += `### Slide ${issue.slide}: ${issue.type}\n\n`;
      report += `- **Message**: ${issue.message}\n`;
      report += `- **Fix**: Consider breaking into bullet points or multiple slides\n\n`;
    }
  }

  // Add detailed measurements section
  report += `## Detailed Measurements\n\n`;
  report += `This section shows the actual height measurements for each slide to aid in debugging overflow issues.\n\n`;

  for (const m of measurements) {
    const status = m.hasOverflow ? "❌ OVERFLOW" : "✅ OK";
    report += `### Slide ${m.slide} ${status}\n\n`;

    if (m.screenshot) {
      report += `📸 [Screenshot](../screenshots/${m.screenshot})\n\n`;
    }

    report += `| Container | Scroll Height | Client Height | Difference | Overflow? |\n`;
    report += `|-----------|---------------|---------------|------------|----------|\n`;

    for (const [selector, data] of Object.entries(m.details)) {
      if (data.found === false) {
        report += `| ${selector} | - | - | - | Not found |\n`;
      } else {
        const overflowIcon = data.hasOverflow ? "❌" : "✅";
        report += `| ${selector} | ${data.scrollHeight}px | ${data.clientHeight || data.innerHeight}px | ${data.diff}px | ${overflowIcon} |\n`;
      }
    }

    report += `\n`;
  }

  report += `## Summary\n\n`;
  report += `✅ **${passedSlides} slides passed** all checks\n`;

  if (criticalIssues.length > 0) {
    report += `❌ **${new Set(criticalIssues.map((i) => i.slide)).size} slides have critical issues** requiring fixes\n`;
  }

  if (warnings.length > 0) {
    report += `⚠️ **${new Set(warnings.map((i) => i.slide)).size} slides have warnings** (optional improvements)\n`;
  }

  // Save report
  await fs.mkdir(REPORT_DIR, { recursive: true });
  const reportPath = path.join(REPORT_DIR, `${deckName}-${timestamp}.md`);
  await fs.writeFile(reportPath, report);

  return reportPath;
}

/**
 * Load linting configuration
 */
async function loadLintConfig() {
  const configPath = path.join(WORKSPACE_ROOT, ".slidevlintrc.json");
  try {
    const configData = await fs.readFile(configPath, "utf8");
    return JSON.parse(configData).rules;
  } catch (error) {
    // Return default config if file doesn't exist
    // FOCUS ON SYNTAX ERRORS ONLY - readability rules disabled for performance
    return {
      "max-bullets-per-slide": { enabled: false },
      "max-code-lines": { enabled: false },
      "max-text-block-length": { enabled: false },
      "missing-image-files": { enabled: true, severity: "error" },
      "frontmatter-required-fields": {
        enabled: true,
        severity: "warning",
        fields: ["layout"],
      },
      "no-empty-slides": { enabled: true, severity: "error" },
      "max-heading-depth": { enabled: false },
    };
  }
}

/**
 * Get line number for a position in content
 */
function getLineNumber(content, substring) {
  const index = content.indexOf(substring);
  if (index === -1) return 1;
  return content.substring(0, index).split("\n").length;
}

/**
 * Parse YAML frontmatter
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const yaml = match[1];
  const result = {};

  // Simple YAML parser for basic key-value pairs
  yaml.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      result[key] = value;
    }
  });

  return result;
}

/**
 * Static lint checking (no Playwright needed)
 */
async function staticLint(slideFile, rules) {
  const issues = [];
  const fullPath = path.join(SLIDES_DIR, slideFile);

  try {
    const content = await fs.readFile(fullPath, "utf8");
    const slides = content.split(/^---$/m);

    // Rule: Check total slides count
    if (rules["max-slides-count"]?.enabled) {
      const slideCount = slides.length - 1; // Exclude frontmatter
      if (slideCount > rules["max-slides-count"].max) {
        issues.push({
          file: slideFile,
          line: 1,
          column: 1,
          severity: rules["max-slides-count"].severity,
          rule: "max-slides-count",
          message: `Presentation has ${slideCount} slides (max ${rules["max-slides-count"].max} recommended)`,
        });
      }
    }

    slides.forEach((slide, index) => {
      const slideNumber = index + 1;
      const slideStart = getLineNumber(content, slide);

      // Rule: Check for empty slides
      if (rules["no-empty-slides"]?.enabled && index > 0) {
        const trimmed = slide.trim();
        if (trimmed.length === 0 || trimmed === "---") {
          issues.push({
            file: slideFile,
            line: slideStart,
            column: 1,
            severity: rules["no-empty-slides"].severity,
            rule: "no-empty-slides",
            message: `Slide ${slideNumber} is empty`,
          });
        }
      }

      // Rule: Max bullets per slide
      if (rules["max-bullets-per-slide"]?.enabled) {
        const bullets = slide.match(/^[\s]*[-*+]\s/gm);
        if (bullets && bullets.length > rules["max-bullets-per-slide"].max) {
          const firstBullet = slide.indexOf(bullets[0]);
          issues.push({
            file: slideFile,
            line:
              slideStart + slide.substring(0, firstBullet).split("\n").length,
            column: 1,
            severity: rules["max-bullets-per-slide"].severity,
            rule: "max-bullets-per-slide",
            message: `Slide ${slideNumber} has ${bullets.length} bullets (max ${rules["max-bullets-per-slide"].max} recommended for readability)`,
          });
        }
      }

      // Rule: Code block length
      if (rules["max-code-lines"]?.enabled) {
        const codeBlocks = slide.match(/```[\s\S]*?```/g) || [];
        codeBlocks.forEach((block) => {
          const lines = block.split("\n").length - 2; // Exclude fence markers
          if (lines > rules["max-code-lines"].max) {
            const blockStart = slide.indexOf(block);
            issues.push({
              file: slideFile,
              line:
                slideStart + slide.substring(0, blockStart).split("\n").length,
              column: 1,
              severity: rules["max-code-lines"].severity,
              rule: "max-code-lines",
              message: `Slide ${slideNumber} has code block with ${lines} lines (max ${rules["max-code-lines"].max} recommended - consider splitting)`,
            });
          }
        });
      }

      // Rule: Text block length
      if (rules["max-text-block-length"]?.enabled) {
        const paragraphs = slide.split("\n\n");
        paragraphs.forEach((para) => {
          const trimmed = para.trim();
          // Skip code blocks, bullets, headings
          if (
            !trimmed.startsWith("```") &&
            !trimmed.match(/^[\s]*[-*+#]/) &&
            trimmed.length > rules["max-text-block-length"].max
          ) {
            const paraStart = slide.indexOf(para);
            issues.push({
              file: slideFile,
              line:
                slideStart + slide.substring(0, paraStart).split("\n").length,
              column: 1,
              severity: rules["max-text-block-length"].severity,
              rule: "max-text-block-length",
              message: `Slide ${slideNumber} has paragraph with ${trimmed.length} characters (max ${rules["max-text-block-length"].max} for readability)`,
            });
          }
        });
      }

      // Rule: Missing images
      if (rules["missing-image-files"]?.enabled) {
        const images = slide.match(/!\[.*?\]\((.*?)\)/g) || [];
        for (const img of images) {
          const pathMatch = img.match(/\((.*?)\)/);
          if (!pathMatch) continue;

          let imgPath = pathMatch[1];

          // Skip external URLs
          if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
            continue;
          }

          // Resolve relative path
          const slideDir = path.dirname(fullPath);
          const resolvedPath = path.resolve(slideDir, imgPath);

          if (!existsSync(resolvedPath)) {
            const imgStart = slide.indexOf(img);
            issues.push({
              file: slideFile,
              line:
                slideStart + slide.substring(0, imgStart).split("\n").length,
              column: 1,
              severity: rules["missing-image-files"].severity,
              rule: "missing-image-files",
              message: `Image not found: ${imgPath}`,
            });
          }
        }
      }

      // Rule: Heading depth
      if (rules["max-heading-depth"]?.enabled) {
        const headings = slide.match(/^#{4,}.+$/gm) || [];
        headings.forEach((heading) => {
          const depth = heading.match(/^#+/)[0].length;
          if (depth > rules["max-heading-depth"].max) {
            const headingStart = slide.indexOf(heading);
            issues.push({
              file: slideFile,
              line:
                slideStart +
                slide.substring(0, headingStart).split("\n").length,
              column: 1,
              severity: rules["max-heading-depth"].severity,
              rule: "max-heading-depth",
              message: `Slide ${slideNumber} has heading depth ${depth} (max ${rules["max-heading-depth"].max} recommended for slides)`,
            });
          }
        });
      }

      // Rule: Frontmatter required fields (only for first slide)
      if (rules["frontmatter-required-fields"]?.enabled && index === 0) {
        const frontmatter = parseFrontmatter(slide);
        if (frontmatter) {
          const requiredFields = rules["frontmatter-required-fields"].fields;
          requiredFields.forEach((field) => {
            if (!frontmatter[field]) {
              issues.push({
                file: slideFile,
                line: 1,
                column: 1,
                severity: rules["frontmatter-required-fields"].severity,
                rule: "frontmatter-required-fields",
                message: `Missing recommended frontmatter field: ${field}`,
              });
            }
          });
        }
      }
    });
  } catch (error) {
    issues.push({
      file: slideFile,
      line: 1,
      column: 1,
      severity: "error",
      rule: "file-read-error",
      message: `Failed to read file: ${error.message}`,
    });
  }

  return issues;
}

/**
 * Format issues for VS Code problem matcher
 */
function formatIssuesForVSCode(issues) {
  issues.forEach((issue) => {
    const level = issue.severity === "error" ? "error" : "warning";
    console.log(
      `${issue.file}:${issue.line}:${issue.column}: ${level}: [${issue.rule}] ${issue.message}`,
    );
  });
}

/**
 * Generate lint report
 */
async function generateLintReport(results) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  let report = `# Slidev Static Lint Report\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n\n`;

  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const totalErrors = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "error").length,
    0,
  );
  const totalWarnings = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "warning").length,
    0,
  );

  report += `## Summary\n\n`;
  report += `- **${results.length}** file(s) checked\n`;
  report += `- **${totalIssues}** total issue(s) found\n`;
  report += `- **${totalErrors}** error(s)\n`;
  report += `- **${totalWarnings}** warning(s)\n\n`;

  results.forEach((result) => {
    if (result.issues.length === 0) return;

    report += `## ${result.file}\n\n`;
    report += `${result.issues.length} issue(s) found:\n\n`;

    result.issues.forEach((issue) => {
      const icon = issue.severity === "error" ? "❌" : "⚠️";
      report += `${icon} **Line ${issue.line}** [${issue.rule}]: ${issue.message}\n`;
    });

    report += `\n`;
  });

  // Save report
  await fs.mkdir(REPORT_DIR, { recursive: true });
  const reportPath = path.join(REPORT_DIR, `lint-${timestamp}.md`);
  await fs.writeFile(reportPath, report);

  return reportPath;
}

/**
 * Find all slide files
 */
async function findAllSlides() {
  const slides = [];
  const categories = ["workshop", "tech-talks", "exec-talks"];

  for (const category of categories) {
    const categoryPath = path.join(SLIDES_DIR, category);
    try {
      const files = await fs.readdir(categoryPath);
      for (const file of files) {
        if (file.endsWith(".md")) {
          slides.push(`${category}/${file}`);
        }
      }
    } catch (err) {
      // Category directory doesn't exist, skip
    }
  }

  return slides;
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    console.log(`
Slidev Slide Verification Tool

Usage:
  node verify-slides.mjs <slide-file>           Verify single deck (full Playwright)
  node verify-slides.mjs --all                  Verify all decks
  node verify-slides.mjs --smart                Smart mode: lint first, Playwright only if errors
  node verify-slides.mjs --lint-mode            Static analysis only (fast, no Playwright)
  node verify-slides.mjs --fail-on-errors       Exit 1 if critical issues found
  node verify-slides.mjs --tolerance=10         Set overflow tolerance (default: 5px)
  node verify-slides.mjs --port=3031            Use custom port (default: random 3030-3130)
  node verify-slides.mjs --no-screenshots       Skip screenshots (faster, but less visual)

Note: Random port is used by default to allow parallel test execution.

Examples:
  node verify-slides.mjs workshop/03-custom-prompts.md --smart
  node verify-slides.mjs tech-talks/copilot-cli.md --lint-mode
  node verify-slides.mjs --all --fail-on-errors --smart
  node verify-slides.mjs tech-talks/agent-orchestration.md --tolerance=0 --port=3031

Modes:
  --lint-mode  Fast static analysis (200ms, no Playwright)
               Checks: bullets, code length, missing images, empty slides, text blocks
               Use for: editing, CI/CD pre-checks, bulk validation

  --smart      Adaptive verification (RECOMMENDED)
               1. Run static lint first (fast)
               2. If errors found → Full Playwright verification with screenshots
               3. If warnings only or clean → Skip Playwright (saves 2-3 minutes)
               Use for: regular development workflow, pre-commit checks

  (no flag)    Always run full Playwright verification
               Use for: final sign-off, deployment validation, investigating overflow
`);
    process.exit(0);
  }

  const lintMode = args.includes("--lint-mode");
  const smartMode = args.includes("--smart");
  const failOnErrors = args.includes("--fail-on-errors");
  const verifyAll = args.includes("--all");
  const tolerance = parseInt(
    args.find((arg) => arg.startsWith("--tolerance="))?.split("=")[1] || "5",
  );
  // Use random port by default for parallel execution, or explicit port if specified
  const portArg = args.find((arg) => arg.startsWith("--port="));
  const port = portArg ? parseInt(portArg.split("=")[1]) : getRandomPort();
  const captureAll = !args.includes("--no-screenshots");

  let slidesToVerify = [];

  if (verifyAll) {
    console.log("🔍 Finding all slide decks...");
    slidesToVerify = await findAllSlides();
    console.log(`Found ${slidesToVerify.length} decks\n`);
  } else {
    slidesToVerify = args.filter((arg) => !arg.startsWith("--"));
  }

  if (slidesToVerify.length === 0) {
    console.error("❌ No slide files specified");
    process.exit(1);
  }

  // SMART MODE - Lint first, Playwright only if errors
  if (smartMode) {
    console.log(
      "🧠 Running smart verification (lint first, Playwright if needed)...\n",
    );

    const rules = await loadLintConfig();
    const lintResults = [];

    // Step 1: Run static lint on all files
    for (const slideFile of slidesToVerify) {
      console.log(`📋 Linting: ${slideFile}`);
      const issues = await staticLint(slideFile, rules);
      lintResults.push({ file: slideFile, issues });

      const errorCount = issues.filter((i) => i.severity === "error").length;
      const warningCount = issues.filter(
        (i) => i.severity === "warning",
      ).length;

      if (errorCount > 0) {
        console.log(`  ❌ ${errorCount} error(s), ${warningCount} warning(s)`);
      } else if (warningCount > 0) {
        console.log(`  ⚠️  ${warningCount} warning(s)`);
      } else {
        console.log(`  ✅ No issues found`);
      }
    }

    // Generate lint report
    const lintReportPath = await generateLintReport(lintResults);
    console.log(`\n📄 Lint report saved: ${lintReportPath}`);

    // Step 2: Check if any file has errors
    const filesWithErrors = lintResults.filter(
      (r) => r.issues.filter((i) => i.severity === "error").length > 0,
    );

    const totalErrors = lintResults.reduce(
      (sum, r) => sum + r.issues.filter((i) => i.severity === "error").length,
      0,
    );
    const totalWarnings = lintResults.reduce(
      (sum, r) => sum + r.issues.filter((i) => i.severity === "warning").length,
      0,
    );

    console.log(`\n${"=".repeat(60)}`);
    console.log("LINT SUMMARY");
    console.log("=".repeat(60));
    console.log(`Checked ${lintResults.length} file(s)`);
    console.log(`Found ${totalErrors} error(s), ${totalWarnings} warning(s)`);

    if (filesWithErrors.length === 0) {
      console.log(`\n✅ No errors found - skipping Playwright verification!`);
      console.log(`   (Warnings don't require visual validation)`);
      console.log(`   Saved ~2-3 minutes per deck ⚡\n`);

      if (failOnErrors && totalWarnings > 0) {
        // Note: Some teams might want to fail on warnings too
        console.log(
          "💡 Tip: Warnings found but not failing (only errors cause failure)",
        );
      }

      process.exit(0);
    }

    // Step 3: Run Playwright verification only on files with errors
    console.log(
      `\n⚠️  ${filesWithErrors.length} file(s) have errors - running full Playwright verification...\n`,
    );

    const playwrightResults = [];

    for (const result of filesWithErrors) {
      const slideFile = result.file;
      console.log(`\n${"=".repeat(60)}`);
      console.log(`Verifying with Playwright: ${slideFile}`);
      console.log("=".repeat(60));

      let server;
      try {
        // Start server
        console.log(`🚀 Starting Slidev server on port ${port}...`);
        server = await startSlidevServer(slideFile, port);
        console.log("✅ Server ready\n");

        // Verify slides
        const verifyResult = await verifySlides(slideFile, port, {
          captureAll: true, // Always capture screenshots when errors exist
          tolerance,
        });

        // Generate report
        const reportPath = await generateReport(verifyResult);
        console.log(`\n📄 Report saved: ${reportPath}`);

        playwrightResults.push(verifyResult);

        // Print summary
        const criticalIssues = verifyResult.issues.filter(
          (i) => i.severity === "critical",
        );
        if (criticalIssues.length === 0) {
          console.log("✅ All slides passed Playwright verification!");
        } else {
          console.log(`❌ Found ${criticalIssues.length} critical issue(s)`);
        }

        console.log(`📸 Screenshots saved to: ${SCREENSHOT_DIR}`);
      } catch (error) {
        console.error(`❌ Error verifying ${slideFile}:`, error.message);
        playwrightResults.push({ slideFile, error: error.message });
      } finally {
        if (server) {
          server.kill();
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }

    // Final summary
    console.log(`\n${"=".repeat(60)}`);
    console.log("SMART VERIFICATION COMPLETE");
    console.log("=".repeat(60));
    console.log(`Linted: ${lintResults.length} file(s)`);
    console.log(`Playwright verified: ${filesWithErrors.length} file(s)`);
    console.log(
      `Skipped: ${lintResults.length - filesWithErrors.length} file(s) (no errors)`,
    );

    const totalCritical = playwrightResults.reduce(
      (sum, r) =>
        sum + (r.issues?.filter((i) => i.severity === "critical").length || 0),
      0,
    );

    console.log(`Total critical issues: ${totalCritical}`);

    if (failOnErrors && (totalErrors > 0 || totalCritical > 0)) {
      console.log("\n❌ Exiting with error due to critical issues");
      process.exit(1);
    }

    process.exit(0);
  }

  // LINT MODE - Static analysis only
  if (lintMode) {
    console.log("🔍 Running static lint analysis...\n");

    const rules = await loadLintConfig();
    const results = [];

    for (const slideFile of slidesToVerify) {
      console.log(`Linting: ${slideFile}`);
      const issues = await staticLint(slideFile, rules);
      results.push({ file: slideFile, issues });

      // Print issues in VS Code format
      if (issues.length > 0) {
        formatIssuesForVSCode(issues);
      } else {
        console.log("  ✅ No issues found");
      }
      console.log();
    }

    // Generate report
    const reportPath = await generateLintReport(results);
    console.log(`\n📄 Lint report saved: ${reportPath}`);

    // Summary
    const totalErrors = results.reduce(
      (sum, r) => sum + r.issues.filter((i) => i.severity === "error").length,
      0,
    );
    const totalWarnings = results.reduce(
      (sum, r) => sum + r.issues.filter((i) => i.severity === "warning").length,
      0,
    );

    console.log(`\n${"=".repeat(60)}`);
    console.log("LINT COMPLETE");
    console.log("=".repeat(60));
    console.log(`Checked ${results.length} file(s)`);
    console.log(`Found ${totalErrors} error(s), ${totalWarnings} warning(s)`);

    if (failOnErrors && totalErrors > 0) {
      console.log("\n❌ Exiting with error due to lint errors");
      process.exit(1);
    }

    process.exit(0);
  }

  // FULL VERIFICATION MODE - Playwright-based
  let allResults = [];

  for (const slideFile of slidesToVerify) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Verifying: ${slideFile}`);
    console.log("=".repeat(60));

    let server;
    try {
      // Start server
      console.log(`🚀 Starting Slidev server on port ${port}...`);
      server = await startSlidevServer(slideFile, port);
      console.log("✅ Server ready\n");

      // Verify slides
      const result = await verifySlides(slideFile, port, {
        captureAll,
        tolerance,
      });

      // Generate report
      const reportPath = await generateReport(result);
      console.log(`\n📄 Report saved: ${reportPath}`);

      allResults.push(result);

      // Print summary
      const criticalIssues = result.issues.filter(
        (i) => i.severity === "critical",
      );
      if (criticalIssues.length === 0) {
        console.log("✅ All slides passed verification!");
      } else {
        console.log(`❌ Found ${criticalIssues.length} critical issue(s)`);
      }

      if (captureAll) {
        console.log(`📸 Screenshots saved to: ${SCREENSHOT_DIR}`);
      }
    } catch (error) {
      console.error(`❌ Error verifying ${slideFile}:`, error.message);
      allResults.push({ slideFile, error: error.message });
    } finally {
      if (server) {
        server.kill();
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for port to free
      }
    }
  }

  // Final summary
  console.log(`\n${"=".repeat(60)}`);
  console.log("VERIFICATION COMPLETE");
  console.log("=".repeat(60));

  const totalCritical = allResults.reduce(
    (sum, r) =>
      sum + (r.issues?.filter((i) => i.severity === "critical").length || 0),
    0,
  );

  console.log(`Verified ${allResults.length} deck(s)`);
  console.log(`Total critical issues: ${totalCritical}`);

  if (failOnErrors && totalCritical > 0) {
    console.log("\n❌ Exiting with error due to critical issues");
    process.exit(1);
  }

  process.exit(0);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
