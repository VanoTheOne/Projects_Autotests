const { test, expect } = require('@playwright/test');
const Base = require('../page-obj/base');
const NavigationMenu = require('../page-obj/navigationMenu');
const PersonalSettings = require('../page-obj/personalSettings');

test.describe('Vigbo profile settings tests', function () {
  let base;
  let navigationMenu;
  let personalSettings

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    navigationMenu = new NavigationMenu(page);
    personalSettings = new PersonalSettings(page);

    await base.navigate('https://clients.vigbo.com/area/main.php');
  });

  test.describe('Vigbo profile settings positive tests', function () {
    test('Should check is SaveChanges button active', async ({ page }) => {
      await navigationMenu.openPersonalSettings();
      await expect(await personalSettings.savePersonalDataButton).toHaveAttribute('class', 'btn btn-success btn-big btn--indent-big state-disable');
      await personalSettings.changePasswordButton.click();
      await expect(await personalSettings.savePasswordButton).toHaveAttribute('class', 'btn btn-success btn-big btn--indent-big state-disable');
    });

    test('Should check if possible to change card', async ({ page }) => {
        await navigationMenu.openPersonalSettings();
        await personalSettings.changeCard();
        await expect(page).toHaveTitle('Смена привязанной карты');
    })
  });
});
