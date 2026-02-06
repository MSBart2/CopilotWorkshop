#!/usr/bin/env node

import { chromium } from "playwright";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function checkAllFooters() {
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
    console.log("\nChecking slide 1...");
    await page.goto("http://localhost:3030/1");
    await page.waitForTimeout(2000);

    // Check for CopilotTraining text
    const bodyText = await page.textContent("body");
    const hasCopilotTraining = bodyText?.includes("CopilotTraining");

    // Check for slide number
    const footer = await page.$("footer");
    const footerText = footer ? await footer.textContent() : null;

    console.log("\n═".repeat(60));
    console.log("SLIDE 1 - FOOTER ELEMENTS");
    console.log("═".repeat(60));
    console.log(
      `"CopilotTraining" text found: ${hasCopilotTraining ? "✅ YES" : "❌ NO"}`,
    );
    console.log(`Slide number footer: ${footerText?.trim() || "❌ NOT FOUND"}`);
    console.log("═".repeat(60) + "\n");

    await page.screenshot({ path: "slide-1-footers.png" });
    console.log("Screenshot: slide-1-footers.png\n");
  } finally {
    await browser.close();
    server.kill();
  }
}

checkAllFooters()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
