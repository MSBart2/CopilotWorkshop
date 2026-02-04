#!/usr/bin/env node
/**
 * Slidev Workshop Slide Tester
 *
 * Spawns Slidev dev server, captures compiler errors from terminal,
 * uses Playwright to navigate through all slides, and reports issues.
 *
 * Usage:
 *   node scripts/test-slides.mjs workshop/03-custom-prompts.md
 *   node scripts/test-slides.mjs --all
 */

import { spawn } from "child_process";
import { chromium } from "playwright";
import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join, basename } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SLIDES_DIR = join(__dirname, "..");

const CONFIG = {
  port: 3030,
  serverStartupTimeout: 30000, // 30 seconds to start server
  slideNavigationDelay: 500, // 500ms between slides
  maxSlidesPerModule: 100, // Safety limit
};

// ANSI colors for terminal output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  dim: "\x1b[2m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Get all workshop slide files
 */
async function getWorkshopSlides() {
  const workshopDir = join(SLIDES_DIR, "workshop");
  const files = await readdir(workshopDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => `workshop/${f}`);
}

/**
 * Start Slidev dev server and capture output
 */
function startSlidevServer(slideFile) {
  return new Promise((resolve, reject) => {
    const errors = [];
    const warnings = [];
    let serverReady = false;

    log(`\n📦 Starting Slidev server for ${slideFile}...`, "cyan");

    const proc = spawn("npx", ["slidev", slideFile, "--port", CONFIG.port], {
      cwd: SLIDES_DIR,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, FORCE_COLOR: "0" },
      detached: true, // Allow killing the entire process group
    });

    let output = "";

    const handleOutput = (data) => {
      const text = data.toString();
      output += text;

      // Check for compiler errors
      if (
        text.includes("[plugin:vite:vue]") ||
        text.includes("[vite] Internal server error")
      ) {
        const errorMatch = text.match(/\[plugin:vite:vue\][^\n]*/g);
        if (errorMatch) {
          errors.push(...errorMatch);
        }
        // Capture the full error context
        const lines = text.split("\n");
        lines.forEach((line, i) => {
          if (
            line.includes("Element is missing end tag") ||
            line.includes("Unexpected token") ||
            line.includes("SyntaxError")
          ) {
            errors.push(line.trim());
          }
        });
      }

      // Check for Vue warnings
      if (text.includes("[@vue/compiler-sfc]")) {
        const warnMatch = text.match(/\[@vue\/compiler-sfc\][^\n]*/g);
        if (warnMatch) {
          warnings.push(...warnMatch);
        }
      }

      // Check if server is ready
      if (
        text.includes("localhost:") ||
        text.includes(`http://localhost:${CONFIG.port}`)
      ) {
        if (!serverReady) {
          serverReady = true;
          // Give it a moment to fully initialize
          setTimeout(() => {
            resolve({ proc, errors, warnings, output });
          }, 2000);
        }
      }
    };

    proc.stdout.on("data", handleOutput);
    proc.stderr.on("data", handleOutput);

    proc.on("error", (err) => {
      reject(new Error(`Failed to start Slidev: ${err.message}`));
    });

    proc.on("exit", (code) => {
      if (!serverReady) {
        reject(
          new Error(
            `Slidev exited with code ${code} before server ready.\nOutput:\n${output}\nErrors: ${errors.join("\n")}`,
          ),
        );
      }
    });

    // Timeout
    setTimeout(() => {
      if (!serverReady) {
        proc.kill();
        reject(
          new Error(
            `Server startup timeout.\nOutput:\n${output}\nErrors found: ${errors.join("\n")}`,
          ),
        );
      }
    }, CONFIG.serverStartupTimeout);
  });
}

/**
 * Navigate through all slides using Playwright
 */
async function testSlidesWithPlaywright(slideFile) {
  const results = {
    slideFile,
    totalSlides: 0,
    slidesVisited: 0,
    consoleErrors: [],
    pageErrors: [],
    hasErrorOverlay: false,
    screenshots: [],
  };

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capture console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      if (!text.includes("net::ERR") && !text.includes("Wake Lock")) {
        results.consoleErrors.push(text);
        // Print slide loading errors immediately
        if (text.includes("slide failed to load") || text.includes("500")) {
          log(`  🔴 ${text.substring(0, 100)}...`, "red");
        }
      }
    }
  });

  // Capture page errors (ignore Wake Lock)
  page.on("pageerror", (error) => {
    if (!error.message.includes("Wake Lock")) {
      results.pageErrors.push(`${error.message}`);
    }
  });

  try {
    // Load first slide
    await page.goto(`http://localhost:${CONFIG.port}/1`, {
      waitUntil: "networkidle",
      timeout: 15000,
    });

    // Wait for Slidev to initialize
    await page.waitForTimeout(1500);

    // Check for error overlay
    const errorOverlay = await page
      .locator('.slidev-error, [class*="vite-error"], [class*="error-overlay"]')
      .count();
    if (errorOverlay > 0) {
      results.hasErrorOverlay = true;
      const screenshotPath = join(
        SLIDES_DIR,
        "test-output",
        `${basename(slideFile, ".md")}-error.png`,
      );
      await page.screenshot({ path: screenshotPath, fullPage: true });
      results.screenshots.push(screenshotPath);
    }

    // Get total slides
    try {
      results.totalSlides = await page.evaluate(() => {
        // @ts-ignore - Slidev global
        return window.$slidev?.nav?.total || 0;
      });
    } catch {
      results.totalSlides = 0;
    }

    if (results.totalSlides === 0) {
      log(`  ⚠️  Could not determine slide count`, "yellow");
      results.totalSlides = 20; // Assume some slides for testing
    }

    log(`  📊 Total slides: ${results.totalSlides}`, "dim");

    // Navigate through all slides
    for (
      let i = 1;
      i <= Math.min(results.totalSlides, CONFIG.maxSlidesPerModule);
      i++
    ) {
      try {
        await page.goto(`http://localhost:${CONFIG.port}/${i}`, {
          waitUntil: "domcontentloaded",
          timeout: 5000,
        });
        await page.waitForTimeout(CONFIG.slideNavigationDelay);
        results.slidesVisited++;

        // Check for errors on this slide
        const slideErrors = await page
          .locator("text=/error|Error|ERROR/i")
          .count();
        if (slideErrors > 5) {
          // Some tolerance for legitimate "error" text
          log(`  ⚠️  Slide ${i} may have error content`, "yellow");
        }
      } catch (navError) {
        log(`  ❌ Failed to load slide ${i}: ${navError.message}`, "red");
        break;
      }
    }
  } catch (error) {
    results.pageErrors.push(`Navigation failed: ${error.message}`);
  } finally {
    await browser.close();
  }

  return results;
}

/**
 * Test a single slide file
 */
async function testSlideFile(slideFile) {
  const result = {
    slideFile,
    passed: false,
    compilerErrors: [],
    compilerWarnings: [],
    playwrightResults: null,
    error: null,
  };

  let serverInfo = null;

  try {
    // Start server and capture compiler output
    serverInfo = await startSlidevServer(slideFile);
    result.compilerErrors = serverInfo.errors;
    result.compilerWarnings = serverInfo.warnings;

    if (serverInfo.errors.length > 0) {
      log(`  ❌ Compiler errors found:`, "red");
      serverInfo.errors.forEach((err) => log(`     ${err}`, "red"));
    }

    // Run Playwright tests
    result.playwrightResults = await testSlidesWithPlaywright(slideFile);

    // Determine pass/fail
    const hasCompilerErrors = result.compilerErrors.length > 0;
    const hasPageErrors = result.playwrightResults.pageErrors.length > 0;
    const hasErrorOverlay = result.playwrightResults.hasErrorOverlay;
    // Check for slide loading failures (500 errors)
    const hasSlideLoadErrors = result.playwrightResults.consoleErrors.some(
      e => e.includes("slide failed to load") || e.includes("500")
    );

    result.passed = !hasCompilerErrors && !hasPageErrors && !hasErrorOverlay && !hasSlideLoadErrors;
  } catch (error) {
    result.error = error.message;
    result.passed = false;
  } finally {
    // Kill the server forcefully
    if (serverInfo?.proc) {
      try {
        process.kill(-serverInfo.proc.pid, "SIGKILL");
      } catch {
        try {
          serverInfo.proc.kill("SIGKILL");
        } catch {}
      }
      // Extra wait to ensure port is released
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  return result;
}

/**
 * Print test result summary
 */
function printResult(result) {
  const status = result.passed ? "✅ PASS" : "❌ FAIL";
  const color = result.passed ? "green" : "red";

  log(`\n${status} ${result.slideFile}`, color);

  if (result.error) {
    log(`  Error: ${result.error}`, "red");
  }

  if (result.compilerErrors.length > 0) {
    log(`  Compiler errors: ${result.compilerErrors.length}`, "red");
  }

  if (result.playwrightResults) {
    const pr = result.playwrightResults;
    log(`  Slides: ${pr.slidesVisited}/${pr.totalSlides}`, "dim");
    if (pr.consoleErrors.length > 0) {
      log(`  Console errors: ${pr.consoleErrors.length}`, "yellow");
    }
    if (pr.pageErrors.length > 0) {
      log(`  Page errors: ${pr.pageErrors.length}`, "red");
      pr.pageErrors.forEach((e) => log(`    - ${e}`, "red"));
    }
  }
}

/**
 * Main entry point
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    log("Usage:", "cyan");
    log("  node scripts/test-slides.mjs workshop/03-custom-prompts.md", "dim");
    log("  node scripts/test-slides.mjs --all", "dim");
    process.exit(1);
  }

  // Ensure test-output directory exists
  const { mkdir } = await import("fs/promises");
  await mkdir(join(SLIDES_DIR, "test-output"), { recursive: true });

  let slideFiles = [];

  if (args.includes("--all")) {
    slideFiles = await getWorkshopSlides();
    log(`\n🧪 Testing all ${slideFiles.length} workshop slides...`, "cyan");
  } else {
    slideFiles = args.filter((a) => !a.startsWith("--"));
  }

  const results = [];

  for (const slideFile of slideFiles) {
    log(`\n${"=".repeat(60)}`, "dim");
    log(`Testing: ${slideFile}`, "blue");
    log(`${"=".repeat(60)}`, "dim");

    const result = await testSlideFile(slideFile);
    results.push(result);
    printResult(result);

    // Wait a bit between tests to ensure port is freed
    await new Promise((r) => setTimeout(r, 1000));
  }

  // Final summary
  log(`\n${"=".repeat(60)}`, "cyan");
  log(`SUMMARY`, "cyan");
  log(`${"=".repeat(60)}`, "cyan");

  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;

  log(
    `\nTotal: ${results.length} | Passed: ${passed} | Failed: ${failed}`,
    passed === results.length ? "green" : "yellow",
  );

  if (failed > 0) {
    log(`\nFailed modules:`, "red");
    results
      .filter((r) => !r.passed)
      .forEach((r) => {
        log(`  - ${r.slideFile}`, "red");
        if (r.compilerErrors.length > 0) {
          r.compilerErrors.slice(0, 3).forEach((e) => log(`      ${e}`, "dim"));
        }
      });
  }

  // Write JSON report
  const reportPath = join(SLIDES_DIR, "test-output", "report.json");
  const { writeFile } = await import("fs/promises");
  await writeFile(reportPath, JSON.stringify(results, null, 2));
  log(`\n📄 Report written to: ${reportPath}`, "dim");

  process.exit(failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
