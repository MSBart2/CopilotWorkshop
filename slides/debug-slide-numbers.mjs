#!/usr/bin/env node

import { chromium } from "playwright";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = __dirname;

async function debugSlideNumbers(slideFile) {
  console.log(`\n🔍 Debugging slide numbers for: ${slideFile}`);

  // Start Slidev server
  console.log("🚀 Starting Slidev server...");
  const server = spawn(
    "npx",
    ["slidev", slideFile, "--port", "3030", "--log", "error"],
    {
      cwd: slidesDir,
      stdio: ["ignore", "inherit", "inherit"],
    },
  );

  // Wait for server to be ready
  await new Promise((resolve) => setTimeout(resolve, 12000));
  console.log("✅ Server ready\n");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  try {
    // Check multiple slides
    for (let slideNum of [1, 2, 3, 5, 10]) {
      await page.goto(`http://localhost:3030/${slideNum}`, {
        waitUntil: "networkidle",
        timeout: 10000,
      });
      await page.waitForTimeout(1000);

      console.log(`\n📄 Slide ${slideNum}:`);
      console.log("─".repeat(60));

      // Check if global-bottom footer exists
      const footer = await page.$("footer");
      console.log(`  Footer element: ${footer ? "✅ Found" : "❌ Not found"}`);

      if (footer) {
        const footerText = await footer.textContent();
        const footerVisible = await footer.isVisible();
        const footerBox = await footer.boundingBox();
        console.log(`  Footer text: "${footerText}"`);
        console.log(`  Footer visible: ${footerVisible}`);
        console.log(
          `  Footer position: ${footerBox ? `(${footerBox.x}, ${footerBox.y})` : "No box"}`,
        );
      }

      // Check for any elements with slide numbers
      const slideNumberElements = await page.$$('[class*="slide"]');
      console.log(
        `  Elements with 'slide' in class: ${slideNumberElements.length}`,
      );

      // Check the specific global-bottom component
      const globalBottom = await page.$(".absolute.bottom-4.right-4");
      console.log(
        `  Global-bottom (.absolute.bottom-4.right-4): ${globalBottom ? "✅ Found" : "❌ Not found"}`,
      );

      if (globalBottom) {
        const globalBottomText = await globalBottom.textContent();
        const globalBottomVisible = await globalBottom.isVisible();
        console.log(`  Global-bottom text: "${globalBottomText}"`);
        console.log(`  Global-bottom visible: ${globalBottomVisible}`);
      }

      // Check Slidev navigation state
      const navState = await page.evaluate(() => {
        return {
          currentPage: window.$slidev?.nav?.currentPage,
          total: window.$slidev?.nav?.total,
          slidevExists: !!window.$slidev,
        };
      });
      console.log(`  Slidev nav state:`);
      console.log(`    - $slidev exists: ${navState.slidevExists}`);
      console.log(`    - currentPage: ${navState.currentPage}`);
      console.log(`    - total: ${navState.total}`);

      // Take a screenshot
      await page.screenshot({
        path: join(slidesDir, "screenshots", `debug-slide-${slideNum}.png`),
        fullPage: false,
      });
      console.log(`  📸 Screenshot saved: debug-slide-${slideNum}.png`);
    }
  } catch (error) {
    console.error("❌ Error during debugging:", error);
  } finally {
    await browser.close();
    server.kill();
    console.log("\n✅ Debugging complete\n");
  }
}

// Run the debug
const slideFile = process.argv[2] || "workshop/00-orientation.md";
await debugSlideNumbers(slideFile);
process.exit(0);
