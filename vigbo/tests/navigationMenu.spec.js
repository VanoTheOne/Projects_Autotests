const { test, expect } = require('@playwright/test');
const Base = require('../page-obj/base');
const NavigationMenu = require('../page-obj/navigationMenu');

test.describe('Vigbo main page tests', function () {
  let base;
  let navigationMenu;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    navigationMenu = new NavigationMenu(page);

    await base.navigate('https://clients.vigbo.com/area/main.php');
  });

  test.describe('Main page positive tests', function () {
    test('Should check if navigation buttons leads to the required links', async ({ page }) => {
      await navigationMenu.websitesButton.click();
      await expect(await page).toHaveTitle('Сайты');
      await navigationMenu.gelleriesButton.click();
      await expect(await page).toHaveTitle('Галереи');
      await navigationMenu.domainButton.click();
      await expect(await page).toHaveTitle('Домены');
      await navigationMenu.supportButton.click();
      await expect(await page).toHaveTitle('Тикеты');
      await navigationMenu.optimizationButton.click();
      await expect(await page).toHaveTitle('SEO-оптимизация сайта');
      await navigationMenu.bonusesButton.click();
      await expect(await page).toHaveTitle('Пригласи друга');
      await page.waitForTimeout(2000);
      await navigationMenu.ideasButton.click();
      await expect(await navigationMenu.yourIdeasHeader).toContainText('Ваши идеи');
    });
  });
});
