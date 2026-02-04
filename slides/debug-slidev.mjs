import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const errors = [];
  const consoleMessages = [];
  
  // Collect console messages
  page.on('console', msg => {
    const text = msg.text();
    consoleMessages.push(`[${msg.type()}] ${text}`);
    if (msg.type() === 'error') {
      errors.push(text);
    }
  });
  
  // Collect page errors
  page.on('pageerror', error => {
    errors.push(`PAGE ERROR: ${error.message}\n${error.stack}`);
  });
  
  // Collect failed requests
  page.on('requestfailed', request => {
    errors.push(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
  });
  
  try {
    console.log('Loading http://localhost:3030...');
    await page.goto('http://localhost:3030', { waitUntil: 'networkidle', timeout: 10000 });
    
    console.log('\n=== Page Info ===');
    console.log('Title:', await page.title());
    console.log('URL:', page.url());
    
    // Wait a bit for any async errors
    await page.waitForTimeout(2000);
    
    console.log('\n=== Console Messages ===');
    consoleMessages.forEach(msg => console.log(msg));
    
    if (errors.length > 0) {
      console.log('\n=== ERRORS FOUND ===');
      errors.forEach(err => console.log(err));
    } else {
      console.log('\n✅ No errors detected');
    }
    
    // Check for error text on page
    const bodyText = await page.locator('body').textContent();
    if (bodyText.toLowerCase().includes('error')) {
      console.log('\n=== Error text visible on page ===');
      const errorText = bodyText.match(/.{0,100}error.{0,100}/gi);
      if (errorText) {
        errorText.slice(0, 5).forEach(t => console.log(t));
      }
    }
    
  } catch (error) {
    console.error('\n❌ Failed to load page:', error.message);
  }
  
  await browser.close();
})();
