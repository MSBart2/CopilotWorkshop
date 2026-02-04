import { chromium } from "playwright";

const errors = [];
const warnings = [];
const logs = [];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capture all console messages
  page.on("console", (msg) => {
    const type = msg.type();
    const text = msg.text();

    if (type === "error") {
      errors.push(text);
      console.log(`🔴 ERROR: ${text}`);
    } else if (type === "warning") {
      warnings.push(text);
      console.log(`🟡 WARNING: ${text}`);
    } else if (type === "log" || type === "info") {
      logs.push(text);
    }
  });

  // Capture page errors
  page.on("pageerror", (error) => {
    const msg = `${error.message}\n${error.stack}`;
    errors.push(msg);
    console.log(`🔴 PAGE ERROR:\n${msg}`);
  });

  // Capture failed requests
  page.on("requestfailed", (request) => {
    const msg = `${request.url()} - ${request.failure()?.errorText}`;
    errors.push(msg);
    console.log(`🔴 REQUEST FAILED: ${msg}`);
  });

  try {
    console.log("🔍 Loading http://localhost:3030...\n");

    await page.goto("http://localhost:3030", {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    console.log(`\n✅ Page loaded: ${await page.title()}`);
    console.log(`📍 URL: ${page.url()}\n`);

    // Wait for Vue/Slidev to initialize
    await page.waitForTimeout(3000);

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log(`📊 SUMMARY:`);
    console.log(`   Errors: ${errors.length}`);
    console.log(`   Warnings: ${warnings.length}`);
    console.log(`   Logs: ${logs.length}`);
    console.log("=".repeat(50) + "\n");

    if (errors.length === 0) {
      console.log("✅ No errors detected!");
    } else {
      console.log(`\n❌ Found ${errors.length} error(s):`);
      errors.forEach((err, i) => {
        console.log(`\n${i + 1}. ${err}`);
      });
    }
  } catch (error) {
    console.error(`\n❌ Failed: ${error.message}`);
  } finally {
    await browser.close();
  }
})();
