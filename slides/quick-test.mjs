#!/usr/bin/env node

import { chromium } from "playwright";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT_RANGE_START = 3030;
const PORT_RANGE_END = 3130;

/**
 * Get a random port in the configured range
 * Useful for parallel test execution to avoid port conflicts
 */
function getRandomPort() {
  return Math.floor(Math.random() * (PORT_RANGE_END - PORT_RANGE_START + 1)) + PORT_RANGE_START;
}

async function quickTest() {
  const port = getRandomPort();
  
  // Start server
  console.log(`Starting Slidev server on port ${port}...`);
  const server = spawn(
    "npx",
    ["slidev", "workshop/00-orientation.md", "--port", port],
    {
      cwd: __dirname,
      stdio: "pipe",
    },
  );

  // Wait for "ready" message
  await new Promise((resolve) => {
    server.stdout.on("data", (data) => {
      if (
        data.toString().includes("ready") ||
        data.toString().includes("Local:")
      ) {
        setTimeout(resolve, 3000);
      }
    });
    setTimeout(resolve, 15000); // Fallback timeout
  });

  console.log("Server ready, testing...\n");

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
  });

  try {
    await page.goto(`http://localhost:${port}/2`);
    await page.waitForTimeout(2000);

    // Check for footer
    const footer = await page.$("footer");
    const footerText = footer ? await footer.textContent() : null;
    const footerVisible = footer ? await footer.isVisible() : false;

    console.log("═".repeat(60));
    console.log("SLIDE NUMBER TEST RESULTS");
    console.log("═".repeat(60));
    console.log(`Footer element found: ${footer ? "✅ YES" : "❌ NO"}`);
    console.log(`Footer visible: ${footerVisible ? "✅ YES" : "❌ NO"}`);
    console.log(`Footer text: "${footerText?.trim() || "N/A"}"`);
    console.log("═".repeat(60));

    if (footer && footerVisible && footerText?.includes("/")) {
      console.log("\n🎉 SUCCESS! Slide numbers are working!\n");
    } else {
      console.log("\n❌ FAILED: Slide numbers not showing\n");
    }

    await page.screenshot({ path: "quick-test-slide-2.png" });
    console.log("Screenshot saved: quick-test-slide-2.png\n");
  } finally {
    await browser.close();
    server.kill();
  }
}

quickTest()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
