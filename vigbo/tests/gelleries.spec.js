const { test, expect } = require('@playwright/test');
const Base = require('../page-obj/base');
const NavigationMenu = require('../page-obj/navigationMenu');
const Gelleries = require('../page-obj/gelleries/gelleries');
const NewGellery = require('../page-obj/gelleries/newGellery');

test.describe('Vigbo main page tests', function () {
  let base;
  let navigationMenu;
  let gelleries;
  let newGellery;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    navigationMenu = new NavigationMenu(page);
    gelleries = new Gelleries(page);
    newGellery = new NewGellery(page);

    await base.navigate('https://clients.vigbo.com/area/main.php');
  });

  test.describe('Gelleries positive tests', function () {
    test('Should check if new gellery is created with given name', async ({ page }) => {
      await navigationMenu.openGelleries();
      await gelleries.createGellery('Новая галерея');
      await newGellery.uploadPhoto('D:\\JS\\picture.jpg');
      await newGellery.uploadCover('D:\\JS\\picture.jpg');
      await newGellery.goToGelleryList();
      await expect(await gelleries.newGelleryName).toHaveText('Новая галерея');
    });

    test('Should check if limit of photos for selection is 10 by default', async ({ page }) => {
      await navigationMenu.openGelleries();
      await gelleries.openFavoritesSettings();
      await newGellery.turnOnGetNotificationsCheck();
      await newGellery.turnOnLimitOfPhotosCheck();
      await expect(await newGellery.maxPhotoAmountInput).toHaveValue('10');
    });

    test('Should check the title of watched gellery', async ({ page }) => {
      await navigationMenu.openGelleries();
      const newPage = await gelleries.watchGellery();
      await expect(newPage).toHaveTitle('Новая галерея');
    });

    test('Should check if new gellery is deleted', async ({ page }) => {
      await navigationMenu.openGelleries();
      await gelleries.deleteFirstGellery();
      await expect(await gelleries.gelleryInList).not.toBeVisible();
    });
  });
});