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
 * Usage:
 *   node verify-slides.mjs <slide-file>           # Verify single deck
 *   node verify-slides.mjs --all                  # Verify all decks
 *   node verify-slides.mjs --fail-on-errors       # Exit 1 if issues found
 */

import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_PORT = 3030;
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const REPORT_DIR = path.join(__dirname, 'verification-reports');

/**
 * Start Slidev dev server for a slide file
 */
async function startSlidevServer(slideFile, port) {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['slidev', slideFile, '--port', port.toString()], {
      cwd: __dirname,
      stdio: 'pipe'
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        server.kill();
        reject(new Error('Server startup timeout'));
      }
    }, 30000); // 30 second timeout

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('ready in') || output.includes('Local:')) {
        if (!started) {
          started = true;
          clearTimeout(timeout);
          // Give it a moment to fully initialize
          setTimeout(() => resolve(server), 2000);
        }
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Server error: ${data}`);
    });

    server.on('error', (error) => {
      clearTimeout(timeout);
      reject(error);
    });
  });
}

/**
 * Verify a single slide deck
 */
async function verifySlides(slideFile, port) {
  const baseUrl = `http://localhost:${port}`;
  const deckName = slideFile.replace('.md', '').replace(/\//g, '-');
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();
  
  const issues = [];
  const consoleErrors = [];
  
  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // Navigate to the presentation
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 10000 });
    
    // Get total slide count
    const totalSlides = await page.evaluate(() => {
      return window.__slidev?.nav?.total || 0;
    });
    
    if (totalSlides === 0) {
      throw new Error('Could not detect slides - is Slidev running?');
    }
    
    console.log(`🔍 Verifying ${totalSlides} slides in ${slideFile}...`);
    
    // Check each slide
    for (let i = 1; i <= totalSlides; i++) {
      await page.goto(`${baseUrl}/${i}`, { waitUntil: 'networkidle', timeout: 10000 });
      await page.waitForTimeout(500); // Let animations settle
      
      // Clear previous console errors
      const slideConsoleErrors = [...consoleErrors];
      consoleErrors.length = 0;
      
      // Check 1: Vertical overflow detection
      const overflowCheck = await page.evaluate(() => {
        const slideContent = document.querySelector('.slidev-layout');
        if (!slideContent) return { hasOverflow: false };
        
        const contentHeight = slideContent.scrollHeight;
        const viewportHeight = slideContent.clientHeight;
        const overflow = contentHeight > viewportHeight + 10; // 10px tolerance
        
        return {
          hasOverflow: overflow,
          contentHeight,
          viewportHeight,
          diff: contentHeight - viewportHeight
        };
      });
      
      if (overflowCheck.hasOverflow) {
        const screenshot = `overflow-${deckName}-slide-${i}.png`;
        await fs.mkdir(SCREENSHOT_DIR, { recursive: true });
        await page.screenshot({ path: path.join(SCREENSHOT_DIR, screenshot), fullPage: true });
        
        issues.push({
          slide: i,
          type: 'overflow',
          severity: 'critical',
          message: `Content exceeds viewport by ${overflowCheck.diff}px (${overflowCheck.contentHeight}px content in ${overflowCheck.viewportHeight}px viewport)`,
          screenshot
        });
        console.log(`  ❌ Slide ${i}: Content overflow`);
      } else {
        console.log(`  ✅ Slide ${i}: OK`);
      }
      
      // Check 2: Missing images/assets
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs
          .filter(img => !img.complete || img.naturalHeight === 0)
          .map(img => ({ src: img.src, alt: img.alt }));
      });
      
      if (brokenImages.length > 0) {
        issues.push({
          slide: i,
          type: 'broken-images',
          severity: 'critical',
          message: `${brokenImages.length} missing image(s)`,
          details: brokenImages
        });
        console.log(`  ❌ Slide ${i}: Broken images`);
      }
      
      // Check 3: Console errors during render
      if (slideConsoleErrors.length > 0) {
        issues.push({
          slide: i,
          type: 'console-errors',
          severity: 'critical',
          message: 'Console errors detected',
          details: slideConsoleErrors
        });
        console.log(`  ⚠️ Slide ${i}: Console errors`);
      }
      
      // Check 4: Very long text blocks (readability)
      const longTextBlocks = await page.evaluate(() => {
        const blocks = Array.from(document.querySelectorAll('p, li'));
        return blocks
          .filter(el => el.textContent.trim().length > 200)
          .map(el => ({
            tag: el.tagName.toLowerCase(),
            length: el.textContent.trim().length,
            preview: el.textContent.trim().substring(0, 100) + '...'
          }));
      });
      
      if (longTextBlocks.length > 0) {
        issues.push({
          slide: i,
          type: 'readability',
          severity: 'warning',
          message: `${longTextBlocks.length} text block(s) exceed 200 characters`,
          details: longTextBlocks
        });
      }
    }
    
  } finally {
    await browser.close();
  }
  
  return { slideFile, totalSlides, issues };
}

/**
 * Generate markdown report
 */
async function generateReport(result) {
  const { slideFile, totalSlides, issues } = result;
  const deckName = slideFile.replace('.md', '').replace(/\//g, '-');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
  
  const criticalIssues = issues.filter(i => i.severity === 'critical');
  const warnings = issues.filter(i => i.severity === 'warning');
  const passedSlides = totalSlides - new Set(issues.map(i => i.slide)).size;
  
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
      
      if (issue.details) {
        report += `- **Details**: \`\`\`json\n${JSON.stringify(issue.details, null, 2)}\n\`\`\`\n`;
      }
      
      // Add fix suggestion
      if (issue.type === 'overflow') {
        report += `- **Fix**: Split content into multiple slides or use two-column layout\n`;
      } else if (issue.type === 'broken-images') {
        report += `- **Fix**: Verify image paths and ensure files exist\n`;
      } else if (issue.type === 'console-errors') {
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
  
  report += `## Summary\n\n`;
  report += `✅ **${passedSlides} slides passed** all checks\n`;
  
  if (criticalIssues.length > 0) {
    report += `❌ **${new Set(criticalIssues.map(i => i.slide)).size} slides have critical issues** requiring fixes\n`;
  }
  
  if (warnings.length > 0) {
    report += `⚠️ **${new Set(warnings.map(i => i.slide)).size} slides have warnings** (optional improvements)\n`;
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
  const categories = ['workshop', 'tech-talks', 'exec-talks'];
  
  for (const category of categories) {
    const categoryPath = path.join(__dirname, category);
    try {
      const files = await fs.readdir(categoryPath);
      for (const file of files) {
        if (file.endsWith('.md')) {
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
  
  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Slidev Slide Verification Tool

Usage:
  node verify-slides.mjs <slide-file>           Verify single deck
  node verify-slides.mjs --all                  Verify all decks
  node verify-slides.mjs --fail-on-errors       Exit 1 if critical issues found

Examples:
  node verify-slides.mjs workshop/03-custom-prompts.md
  node verify-slides.mjs tech-talks/copilot-cli.md
  node verify-slides.mjs --all
`);
    process.exit(0);
  }
  
  const failOnErrors = args.includes('--fail-on-errors');
  const verifyAll = args.includes('--all');
  
  let slidesToVerify = [];
  
  if (verifyAll) {
    console.log('🔍 Finding all slide decks...');
    slidesToVerify = await findAllSlides();
    console.log(`Found ${slidesToVerify.length} decks\n`);
  } else {
    slidesToVerify = args.filter(arg => !arg.startsWith('--'));
  }
  
  if (slidesToVerify.length === 0) {
    console.error('❌ No slide files specified');
    process.exit(1);
  }
  
  let allResults = [];
  
  for (const slideFile of slidesToVerify) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Verifying: ${slideFile}`);
    console.log('='.repeat(60));
    
    let server;
    try {
      // Start server
      console.log('🚀 Starting Slidev server...');
      server = await startSlidevServer(slideFile, BASE_PORT);
      console.log('✅ Server ready\n');
      
      // Verify slides
      const result = await verifySlides(slideFile, BASE_PORT);
      
      // Generate report
      const reportPath = await generateReport(result);
      console.log(`\n📄 Report saved: ${reportPath}`);
      
      allResults.push(result);
      
      // Print summary
      const criticalIssues = result.issues.filter(i => i.severity === 'critical');
      if (criticalIssues.length === 0) {
        console.log('✅ All slides passed verification!');
      } else {
        console.log(`❌ Found ${criticalIssues.length} critical issue(s)`);
      }
      
    } catch (error) {
      console.error(`❌ Error verifying ${slideFile}:`, error.message);
      allResults.push({ slideFile, error: error.message });
    } finally {
      if (server) {
        server.kill();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for port to free
      }
    }
  }
  
  // Final summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('VERIFICATION COMPLETE');
  console.log('='.repeat(60));
  
  const totalCritical = allResults.reduce((sum, r) => 
    sum + (r.issues?.filter(i => i.severity === 'critical').length || 0), 0);
  
  console.log(`Verified ${allResults.length} deck(s)`);
  console.log(`Total critical issues: ${totalCritical}`);
  
  if (failOnErrors && totalCritical > 0) {
    console.log('\n❌ Exiting with error due to critical issues');
    process.exit(1);
  }
  
  process.exit(0);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
