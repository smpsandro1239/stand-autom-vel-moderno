const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1200 });

  console.log('Capturando Home V4...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'docs/screenshots/frontend_home_v4.png' });
    console.log('Home V4 capturada.');
  } catch (e) { console.log('Erro Home:', e.message); }

  console.log('Capturando Login V4...');
  try {
    await page.goto('http://localhost:3000/login', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'docs/screenshots/frontend_login_v4.png' });
    console.log('Login V4 capturado.');
  } catch (e) { console.log('Erro Login:', e.message); }

  console.log('Capturando Swagger V4...');
  try {
    await page.goto('http://localhost:3001/api/docs', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'docs/screenshots/backend_swagger_v4.png', fullPage: true });
    console.log('Swagger V4 capturado.');
  } catch (e) { console.log('Erro Swagger:', e.message); }

  await browser.close();
})();
