const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const warnings = [];

  // Capture console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push({ type: "console", message: msg.text() });
    } else if (msg.type() === "warning") {
      warnings.push({ type: "console", message: msg.text() });
    }
  });

  // Capture page errors
  page.on("pageerror", (error) => {
    errors.push({ type: "page", message: error.message, stack: error.stack });
  });

  console.log(
    "🔍 Loading slides at http://localhost:3030/03-custom-prompts.html...\n",
  );

  try {
    await page.goto("http://localhost:3030/03-custom-prompts.html", {
      waitUntil: "networkidle",
      timeout: 10000,
    });

    // Wait a bit for Vue to render
    await page.waitForTimeout(2000);

    // Get the total number of slides
    const slideCount = await page.evaluate(() => {
      return window?.__slidev__?.nav?.total || 0;
    });

    console.log(`📊 Found ${slideCount} slides\n`);

    // Navigate through each slide
    for (let i = 1; i <= slideCount; i++) {
      console.log(`Checking slide ${i}/${slideCount}...`);

      await page.goto(`http://localhost:3030/03-custom-prompts/${i}`, {
        waitUntil: "networkidle",
        timeout: 5000,
      });

      await page.waitForTimeout(1000);

      // Check for any elements with error states
      const hasErrors = await page.evaluate(() => {
        const errorElements = document.querySelectorAll(
          "[data-error], .error, .vue-error",
        );
        return errorElements.length > 0;
      });

      if (hasErrors) {
        errors.push({
          type: "render",
          slide: i,
          message: "Error elements found on slide",
        });
      }

      // Try to get the slide title
      const title = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        return h1 ? h1.textContent.trim() : "Unknown";
      });

      console.log(`  ✓ Slide ${i}: ${title}`);
    }
  } catch (error) {
    errors.push({ type: "navigation", message: error.message });
  }

  console.log("\n" + "=".repeat(60));
  console.log("📋 RESULTS");
  console.log("=".repeat(60) + "\n");

  if (errors.length === 0 && warnings.length === 0) {
    console.log("✅ No errors or warnings found!\n");
  } else {
    if (errors.length > 0) {
      console.log(`❌ Found ${errors.length} errors:\n`);
      errors.forEach((err, idx) => {
        console.log(
          `${idx + 1}. [${err.type}] ${err.slide ? `Slide ${err.slide}: ` : ""}${err.message}`,
        );
        if (err.stack) {
          console.log(`   Stack: ${err.stack.split("\n")[0]}`);
        }
      });
      console.log();
    }

    if (warnings.length > 0) {
      console.log(`⚠️  Found ${warnings.length} warnings:\n`);
      warnings.forEach((warn, idx) => {
        console.log(`${idx + 1}. ${warn.message}`);
      });
      console.log();
    }
  }

  await browser.close();

  process.exit(errors.length > 0 ? 1 : 0);
})();
