const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1800 });

  console.log('Capturing Home V7 (Ultra Elite)...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'docs/screenshots/frontend_home_v7.png' });
    console.log('Home V7 captured.');
  } catch (e) { console.log('Error Home:', e.message); }

  console.log('Capturing Login V7 (Security Hub)...');
  try {
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle', timeout: 60000 });
    await page.screenshot({ path: 'docs/screenshots/frontend_login_v7.png' });
    console.log('Login V7 captured.');
  } catch (e) { console.log('Error Login:', e.message); }

  await browser.close();
})();
