#!/usr/bin/env node

import { chromium } from "playwright";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function debugSlidevContext() {
  console.log("Starting Slidev server...");
  const server = spawn(
    "npx",
    ["slidev", "workshop/00-orientation.md", "--port", "3030"],
    {
      cwd: __dirname,
      stdio: "pipe",
    },
  );

  await new Promise((resolve) => {
    server.stdout.on("data", (data) => {
      if (
        data.toString().includes("ready") ||
        data.toString().includes("Local:")
      ) {
        setTimeout(resolve, 3000);
      }
    });
    setTimeout(resolve, 15000);
  });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
  });

  try {
    await page.goto("http://localhost:3030/1");
    await page.waitForTimeout(2000);

    // Debug what's available in the Slidev context
    const context = await page.evaluate(() => {
      return {
        slidevExists: !!window.$slidev,
        route: window.$slidev?.route || null,
        config: window.$slidev?.configs || null,
        location: {
          pathname: window.location.pathname,
          href: window.location.href,
        },
        __slidev__: !!window.__SLIDEV__,
      };
    });

    console.log("\n" + "═".repeat(60));
    console.log("SLIDEV CONTEXT DEBUG");
    console.log("═".repeat(60));
    console.log(JSON.stringify(context, null, 2));
    console.log("═".repeat(60) + "\n");
  } finally {
    await browser.close();
    server.kill();
  }
}

debugSlidevContext()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
