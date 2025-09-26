const { test, expect } = require('@playwright/test');
const Base = require('../page-obj/base');
const Header = require('../page-obj/header');

test.describe('', function () {
  let base;
  let header;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
  });

  test.describe(`Main page smoke tests`, function () {
    test(`Should check the title of user's profile`, async ({ page }) => {
      await base.navigate(`https://www.imdb.com/`);
      await header.openUserProfile();
      await expect(page).toHaveTitle(`Ivan-0758's Profile - IMDb`);
    });
  });
});
