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
  return Math.floor(Math.random() * (PORT_RANGE_END - PORT_RANGE_START + 1)) + PORT_RANGE_START;
}

/**
 * Start Slidev dev server for a slide file
 */
async function startSlidevServer(slideFile, port) {
  return new Promise((resolve, reject) => {
    // Use cmd.exe on Windows to ensure npx is found
    const isWindows = process.platform === "win32";
    const command = isWindows ? "cmd.exe" : "npx";
    const args = isWindows
      ? ["/c", "npx", "slidev", slideFile, "--port", port.toString()]
      : ["slidev", slideFile, "--port", port.toString()];

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

    server.stdout.on("data", (data) => {
      const output = data.toString();
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
    });

    server.stderr.on("data", (data) => {
      console.error(`Server error: ${data}`);
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
  node verify-slides.mjs <slide-file>           Verify single deck
  node verify-slides.mjs --all                  Verify all decks
  node verify-slides.mjs --fail-on-errors       Exit 1 if critical issues found
  node verify-slides.mjs --tolerance=10         Set overflow tolerance (default: 5px)
  node verify-slides.mjs --port=3031            Use custom port (default: random 3030-3130)
  node verify-slides.mjs --no-screenshots       Skip screenshots (faster, but less visual)

Note: Random port is used by default to allow parallel test execution.

Examples:
  node verify-slides.mjs workshop/03-custom-prompts.md
  node verify-slides.mjs tech-talks/copilot-cli.md
  node verify-slides.mjs --all --fail-on-errors
  node verify-slides.mjs tech-talks/agent-orchestration.md --tolerance=0 --port=3031
`);
    process.exit(0);
  }

  const failOnErrors = args.includes("--fail-on-errors");
  const verifyAll = args.includes("--all");
  const tolerance = parseInt(
    args.find((arg) => arg.startsWith("--tolerance="))?.split("=")[1] || "5",
  );
  // Use random port by default for parallel execution, or explicit port if specified
  const portArg = args.find((arg) => arg.startsWith("--port="));
  const port = portArg 
    ? parseInt(portArg.split("=")[1])
    : getRandomPort();
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
