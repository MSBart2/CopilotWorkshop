#!/usr/bin/env node

import { chromium } from "playwright";

async function inspectSlideNumbers() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  // Check multiple slides
  for (let slideNum of [1, 2, 5, 10]) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Inspecting Slide ${slideNum}`);
    console.log("=".repeat(60));

    await page.goto(`http://localhost:3030/${slideNum}`, {
      waitUntil: "networkidle",
      timeout: 10000,
    });
    await page.waitForTimeout(2000);

    // Check if global-bottom footer exists
    const footer = await page.$("footer");
    console.log(`\nFooter element: ${footer ? "✅ Found" : "❌ Not found"}`);

    if (footer) {
      const footerText = await footer.textContent();
      const footerVisible = await footer.isVisible();
      const footerBox = await footer.boundingBox();
      const footerHTML = await footer.evaluate((el) => el.outerHTML);
      console.log(`  Text: "${footerText?.trim()}"`);
      console.log(`  Visible: ${footerVisible}`);
      console.log(
        `  Position: ${footerBox ? `x:${Math.round(footerBox.x)}, y:${Math.round(footerBox.y)}, w:${Math.round(footerBox.width)}, h:${Math.round(footerBox.height)}` : "No box"}`,
      );
      console.log(`  HTML: ${footerHTML}`);
    }

    // Check for the specific class combination from global-bottom.vue
    const slideNumberDiv = await page.$(".absolute.bottom-4.right-4");
    console.log(
      `\nSlide number div (.absolute.bottom-4.right-4): ${slideNumberDiv ? "✅ Found" : "❌ Not found"}`,
    );

    if (slideNumberDiv) {
      const text = await slideNumberDiv.textContent();
      const visible = await slideNumberDiv.isVisible();
      const box = await slideNumberDiv.boundingBox();
      const html = await slideNumberDiv.evaluate((el) => el.outerHTML);
      console.log(`  Text: "${text?.trim()}"`);
      console.log(`  Visible: ${visible}`);
      console.log(
        `  Position: ${box ? `x:${Math.round(box.x)}, y:${Math.round(box.y)}, w:${Math.round(box.width)}, h:${Math.round(box.height)}` : "No box"}`,
      );
      console.log(`  HTML: ${html.substring(0, 200)}`);
    }

    // Check Slidev nav state in the Vue app
    const navState = await page.evaluate(() => {
      return {
        currentPage: window.$slidev?.nav?.currentPage,
        total: window.$slidev?.nav?.total,
        slidevExists: !!window.$slidev,
        vueApp: !!window.__VUE__,
      };
    });
    console.log(`\nSlidev Navigation State:`);
    console.log(`  $slidev exists: ${navState.slidevExists}`);
    console.log(`  currentPage: ${navState.currentPage}`);
    console.log(`  total: ${navState.total}`);
    console.log(`  Vue app: ${navState.vueApp}`);

    // Check all footer elements
    const allFooters = await page.$$("footer");
    console.log(`\nAll footer elements found: ${allFooters.length}`);
    for (let i = 0; i < allFooters.length; i++) {
      const text = await allFooters[i].textContent();
      const visible = await allFooters[i].isVisible();
      console.log(
        `  Footer ${i + 1}: visible=${visible}, text="${text?.trim()}"`,
      );
    }

    // Take a screenshot for visual inspection
    await page.screenshot({
      path: `debug-inspect-slide-${slideNum}.png`,
      fullPage: false,
    });
    console.log(`\n📸 Screenshot: debug-inspect-slide-${slideNum}.png`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("Inspection complete!");
  console.log("=".repeat(60) + "\n");

  await browser.close();
}

await inspectSlideNumbers();
process.exit(0);
