const { chromium } = require('@playwright/test');
const Loginer = require('../helpers/loginer');

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginer = new Loginer(page);

  console.log('Starting login');
  await loginer.logInUser(page);
  console.log('Login successful');

  console.log('Saving storage state...');
  await page.context().storageState({ path: './LoginAuth.json' });
  console.log('Data saved');

  await browser.close();
}

export default globalSetup;
