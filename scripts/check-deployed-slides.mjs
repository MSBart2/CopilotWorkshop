#!/usr/bin/env node
/**
 * Check deployed slides at msbart2.github.io/copilottraining
 * 
 * This script uses Playwright to visit each slide deck, navigate through
 * all slides, and check for syntax errors and text overflow issues.
 * 
 * Usage:
 *   node scripts/check-deployed-slides.mjs
 */

import { chromium } from "playwright";
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "http://localhost:8080";
const OUTPUT_DIR = join(__dirname, "..", "slide-verification-output");
const REPORT_FILE = join(__dirname, "..", "slide-issues.md");

// Configuration
const CONFIG = {
  slideNavigationDelay: 500, // 500ms between slides (faster)
  maxSlidesPerDeck: 30, // Reduced limit for faster processing
  screenshotQuality: 80,
};

// Slide decks to check (excluding workshop and archived)
const SLIDE_DECKS = [
  // Tech Talks
  { path: "/tech-talks/agent-orchestration/", name: "Agent Orchestration" },
  { path: "/tech-talks/agent-teams/", name: "Agent Teams" },
  { path: "/tech-talks/agentic-ci/", name: "Agentic CI" },
  { path: "/tech-talks/agentic-journey/", name: "Agentic Journey" },
  { path: "/tech-talks/agentic-prs/", name: "Agentic PRs" },
  { path: "/tech-talks/agentic-repos/", name: "Agentic Repos" },
  { path: "/tech-talks/agentic-sdlc/", name: "Agentic SDLC" },
  { path: "/tech-talks/agentic-sessions/", name: "Agentic Sessions" },
  { path: "/tech-talks/context-engineering-foundations/", name: "Context Engineering Foundations" },
  { path: "/tech-talks/copilot-chat-internals/", name: "Copilot Chat Internals" },
  { path: "/tech-talks/copilot-chat/", name: "Copilot Chat" },
  { path: "/tech-talks/copilot-cli/", name: "Copilot CLI" },
  { path: "/tech-talks/copilot-hooks/", name: "Copilot Hooks" },
  { path: "/tech-talks/copilot-memory/", name: "Copilot Memory" },
  { path: "/tech-talks/copilot-sdk/", name: "Copilot SDK" },
  { path: "/tech-talks/copilot-web/", name: "Copilot Web" },
  { path: "/tech-talks/enterprise-patterns/", name: "Enterprise Patterns" },
  { path: "/tech-talks/mcp-apps/", name: "MCP Apps" },
  { path: "/tech-talks/multi-step-tasks/", name: "Multi-Step Tasks" },
  { path: "/tech-talks/parallel-execution/", name: "Parallel Execution" },
  { path: "/tech-talks/subagents/", name: "Subagents" },
  { path: "/tech-talks/terminal-sandboxing/", name: "Terminal Sandboxing" },
  // Exec Talks
  { path: "/exec-talks/agentic-delivery/", name: "Agentic Delivery" },
  { path: "/exec-talks/agentic-economics/", name: "Agentic Economics" },
  { path: "/exec-talks/agentic-labor/", name: "Agentic Labor" },
];

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
 * Check if an element has text overflow
 */
async function checkTextOverflow(page) {
  return await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const overflowingElements = [];
    
    for (const el of elements) {
      // Skip elements that are meant to scroll
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.overflow === 'auto' || computedStyle.overflow === 'scroll') {
        continue;
      }
      
      // Check if content is overflowing
      if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
        // Get a brief description of the element
        const tagName = el.tagName.toLowerCase();
        const classes = el.className ? `.${el.className.split(' ').join('.')}` : '';
        const id = el.id ? `#${el.id}` : '';
        const textPreview = el.textContent?.substring(0, 50).trim() || '';
        
        overflowingElements.push({
          selector: `${tagName}${id}${classes}`,
          text: textPreview,
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
        });
      }
    }
    
    return overflowingElements;
  });
}

/**
 * Check for syntax errors on the page
 */
async function checkSyntaxErrors(page) {
  const errors = [];
  
  // Check for visible error messages
  const errorSelectors = [
    '.slidev-error',
    '[class*="vite-error"]',
    '[class*="error-overlay"]',
    'text=/SyntaxError/i',
    'text=/Error:/i',
    'text=/Cannot read/i',
    'text=/undefined is not/i',
  ];
  
  for (const selector of errorSelectors) {
    try {
      const count = await page.locator(selector).count();
      if (count > 0) {
        const text = await page.locator(selector).first().textContent({ timeout: 1000 });
        errors.push({ type: 'visible-error', selector, text: text?.substring(0, 200) });
      }
    } catch (e) {
      // Ignore timeout errors
    }
  }
  
  return errors;
}

/**
 * Check a single slide deck
 */
async function checkSlideDeck(browser, deck) {
  const results = {
    deck: deck.name,
    path: deck.path,
    url: `${BASE_URL}${deck.path}`,
    totalSlides: 0,
    slidesChecked: 0,
    issues: [],
    screenshots: [],
    consoleErrors: [],
    pageErrors: [],
  };
  
  log(`\n📊 Checking: ${deck.name}`, "cyan");
  log(`   ${results.url}`, "dim");
  
  const page = await browser.newPage();
  
  // Capture console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      // Filter out known non-issues
      if (!text.includes("net::ERR") && !text.includes("Wake Lock") && !text.includes("favicon")) {
        results.consoleErrors.push(text);
      }
    }
  });
  
  // Capture page errors
  page.on("pageerror", (error) => {
    if (!error.message.includes("Wake Lock")) {
      results.pageErrors.push(error.message);
    }
  });
  
  try {
    // Load the first slide
    await page.goto(`${results.url}1`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    
    // Wait for Slidev to initialize
    await page.waitForTimeout(2000);
    
    // Get total number of slides
    try {
      results.totalSlides = await page.evaluate(() => {
        // @ts-ignore - Slidev global
        return window.$slidev?.nav?.total || 0;
      });
    } catch {
      results.totalSlides = 0;
    }
    
    if (results.totalSlides === 0) {
      log(`   ⚠️  Could not determine slide count`, "yellow");
      results.issues.push({
        slide: 1,
        type: 'navigation-error',
        description: 'Could not determine total slide count',
      });
    } else {
      log(`   📄 Total slides: ${results.totalSlides}`, "dim");
    }
    
    // Navigate through each slide
    const slidesToCheck = Math.min(results.totalSlides || 50, CONFIG.maxSlidesPerDeck);
    
    for (let i = 1; i <= slidesToCheck; i++) {
      try {
        // Navigate to slide
        await page.goto(`${results.url}${i}`, {
          waitUntil: "domcontentloaded",
          timeout: 15000,
        });
        await page.waitForTimeout(CONFIG.slideNavigationDelay);
        
        results.slidesChecked++;
        
        // Check for syntax errors
        const syntaxErrors = await checkSyntaxErrors(page);
        if (syntaxErrors.length > 0) {
          log(`   ❌ Slide ${i}: Syntax errors found`, "red");
          
          // Take screenshot
          const screenshotName = `${deck.path.replace(/\//g, '-')}-slide-${i}-error.png`;
          const screenshotPath = join(OUTPUT_DIR, screenshotName);
          await page.screenshot({ 
            path: screenshotPath, 
            fullPage: true,
            quality: CONFIG.screenshotQuality,
          });
          
          results.issues.push({
            slide: i,
            type: 'syntax-error',
            description: syntaxErrors.map(e => e.text).join('; '),
            screenshot: screenshotName,
          });
          results.screenshots.push(screenshotPath);
        }
        
        // Check for text overflow
        const overflowingElements = await checkTextOverflow(page);
        if (overflowingElements.length > 0) {
          // Filter out minor overflows (less than 5px)
          const significantOverflows = overflowingElements.filter(el => {
            const heightOverflow = el.scrollHeight - el.clientHeight;
            const widthOverflow = el.scrollWidth - el.clientWidth;
            return heightOverflow > 5 || widthOverflow > 5;
          });
          
          if (significantOverflows.length > 0) {
            log(`   ⚠️  Slide ${i}: Text overflow detected (${significantOverflows.length} elements)`, "yellow");
            
            // Take screenshot
            const screenshotName = `${deck.path.replace(/\//g, '-')}-slide-${i}-overflow.png`;
            const screenshotPath = join(OUTPUT_DIR, screenshotName);
            await page.screenshot({ 
              path: screenshotPath, 
              fullPage: true,
              quality: CONFIG.screenshotQuality,
            });
            
            results.issues.push({
              slide: i,
              type: 'text-overflow',
              description: `${significantOverflows.length} elements overflowing: ${significantOverflows.map(e => e.selector).join(', ')}`,
              screenshot: screenshotName,
              details: significantOverflows,
            });
            results.screenshots.push(screenshotPath);
          }
        }
        
        // Progress indicator
        if (i % 10 === 0) {
          log(`   ✓ Checked ${i}/${slidesToCheck} slides...`, "dim");
        }
      } catch (error) {
        log(`   ❌ Failed to load slide ${i}: ${error.message}`, "red");
        results.issues.push({
          slide: i,
          type: 'loading-error',
          description: error.message,
        });
      }
    }
    
    // Report summary for this deck
    if (results.issues.length === 0) {
      log(`   ✅ No issues found!`, "green");
    } else {
      log(`   ⚠️  Found ${results.issues.length} issues`, "yellow");
    }
    
  } catch (error) {
    log(`   ❌ Failed to check deck: ${error.message}`, "red");
    results.issues.push({
      slide: 0,
      type: 'deck-error',
      description: error.message,
    });
  } finally {
    await page.close();
  }
  
  return results;
}

/**
 * Generate markdown report
 */
function generateReport(allResults) {
  let report = "# Slide Verification Report\n\n";
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `Base URL: ${BASE_URL}\n\n`;
  
  // Summary
  const totalDecks = allResults.length;
  const decksWithIssues = allResults.filter(r => r.issues.length > 0).length;
  const totalIssues = allResults.reduce((sum, r) => sum + r.issues.length, 0);
  
  report += "## Summary\n\n";
  report += `- **Total Decks Checked**: ${totalDecks}\n`;
  report += `- **Decks with Issues**: ${decksWithIssues}\n`;
  report += `- **Total Issues Found**: ${totalIssues}\n\n`;
  
  if (totalIssues === 0) {
    report += "✅ **No issues found! All slides look good.**\n\n";
    return report;
  }
  
  // Issues by deck
  report += "## Issues by Deck\n\n";
  
  for (const result of allResults) {
    if (result.issues.length === 0) {
      continue; // Skip decks with no issues
    }
    
    report += `### ${result.deck}\n\n`;
    report += `**URL**: ${result.url}\n\n`;
    report += `**Slides Checked**: ${result.slidesChecked}/${result.totalSlides}\n\n`;
    report += `**Issues Found**: ${result.issues.length}\n\n`;
    
    // Group issues by type
    const errorIssues = result.issues.filter(i => i.type === 'syntax-error');
    const overflowIssues = result.issues.filter(i => i.type === 'text-overflow');
    const otherIssues = result.issues.filter(i => i.type !== 'syntax-error' && i.type !== 'text-overflow');
    
    if (errorIssues.length > 0) {
      report += "#### ❌ Syntax Errors\n\n";
      for (const issue of errorIssues) {
        report += `**Slide ${issue.slide}**\n\n`;
        report += `- ${issue.description}\n`;
        if (issue.screenshot) {
          report += `- Screenshot: ![Slide ${issue.slide}](slide-verification-output/${issue.screenshot})\n`;
        }
        report += "\n";
      }
    }
    
    if (overflowIssues.length > 0) {
      report += "#### ⚠️  Text Overflow Issues\n\n";
      for (const issue of overflowIssues) {
        report += `**Slide ${issue.slide}**\n\n`;
        report += `- ${issue.description}\n`;
        if (issue.screenshot) {
          report += `- Screenshot: ![Slide ${issue.slide}](slide-verification-output/${issue.screenshot})\n`;
        }
        if (issue.details && issue.details.length > 0) {
          report += `- Details:\n`;
          for (const detail of issue.details.slice(0, 3)) { // Show first 3
            report += `  - \`${detail.selector}\`: ${detail.scrollHeight - detail.clientHeight}px overflow (text: "${detail.text}...")\n`;
          }
          if (issue.details.length > 3) {
            report += `  - ... and ${issue.details.length - 3} more\n`;
          }
        }
        report += "\n";
      }
    }
    
    if (otherIssues.length > 0) {
      report += "#### 🔍 Other Issues\n\n";
      for (const issue of otherIssues) {
        report += `**Slide ${issue.slide}** (${issue.type})\n\n`;
        report += `- ${issue.description}\n\n`;
      }
    }
    
    // Console errors
    if (result.consoleErrors.length > 0) {
      report += "#### Console Errors\n\n";
      const uniqueErrors = [...new Set(result.consoleErrors)];
      for (const error of uniqueErrors.slice(0, 5)) {
        report += `- ${error}\n`;
      }
      if (uniqueErrors.length > 5) {
        report += `- ... and ${uniqueErrors.length - 5} more\n`;
      }
      report += "\n";
    }
    
    report += "---\n\n";
  }
  
  return report;
}

/**
 * Main entry point
 */
async function main() {
  log("\n🚀 Starting slide verification...", "cyan");
  log(`   Base URL: ${BASE_URL}`, "dim");
  log(`   Decks to check: ${SLIDE_DECKS.length}`, "dim");
  
  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true });
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const allResults = [];
  
  try {
    // Check each deck
    for (let i = 0; i < SLIDE_DECKS.length; i++) {
      const deck = SLIDE_DECKS[i];
      log(`\n[${i + 1}/${SLIDE_DECKS.length}]`, "blue");
      
      const result = await checkSlideDeck(browser, deck);
      allResults.push(result);
      
      // Small delay between decks
      await new Promise(r => setTimeout(r, 1000));
    }
  } finally {
    await browser.close();
  }
  
  // Generate report
  log("\n📝 Generating report...", "cyan");
  const report = generateReport(allResults);
  await writeFile(REPORT_FILE, report);
  
  log(`\n✅ Report written to: ${REPORT_FILE}`, "green");
  
  // Summary
  const totalIssues = allResults.reduce((sum, r) => sum + r.issues.length, 0);
  const decksWithIssues = allResults.filter(r => r.issues.length > 0).length;
  
  log("\n" + "=".repeat(60), "cyan");
  log("FINAL SUMMARY", "cyan");
  log("=".repeat(60), "cyan");
  log(`\nTotal decks checked: ${allResults.length}`, "dim");
  log(`Decks with issues: ${decksWithIssues}`, decksWithIssues > 0 ? "yellow" : "green");
  log(`Total issues found: ${totalIssues}`, totalIssues > 0 ? "yellow" : "green");
  
  if (totalIssues === 0) {
    log("\n🎉 All slides look great! No issues found.", "green");
  } else {
    log(`\n⚠️  Found issues in ${decksWithIssues} decks. Check ${REPORT_FILE} for details.`, "yellow");
  }
  
  process.exit(totalIssues > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
