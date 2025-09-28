const { test, expect } = require('@playwright/test');
const Base = require('../../page-obj/base');
const Header = require('../../page-obj/header/header');
const AccountMenu = require('../../page-obj/header/accountMenu');

test.describe('Account menu tests', function () {
  let base;
  let header;
  let accountMenu;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    accountMenu = new AccountMenu(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  test.describe(`Account menu smoke tests`, function () {
    // test(`Should check the transition to the user's profile page`, async ({ page }) => {
    //   await accountMenu.openUserProfile();
    //   await expect(page).toHaveTitle(`Ivan-0758's Profile - IMDb`);
    // });
    // test(`Should check the transition to the user's watchlist page`, async ({ page }) => {
    //   await accountMenu.openUserWatchlist();
    //   await expect(page).toHaveTitle(`Your Watchlist`);
    // });
    // test(`Should check the transition to the user's ratings page`, async ({ page }) => {
    //   await accountMenu.openUserRatings();
    //   await expect(page).toHaveTitle(`Your ratings`);
    // });
    // test(`Should check the transition to the user's lists page`, async ({ page }) => {
    //   await accountMenu.openUserLists();
    //   await expect(page).toHaveTitle(`Your lists`);
    // });
    // test(`Should check the transition to the user's interests page`, async ({ page }) => {
    //   await accountMenu.openUserInterests();
    //   await expect(page).toHaveTitle(`Your interests`);
    // });
    // test(`Should check the transition to the user's watch history page`, async ({ page }) => {
    //   await accountMenu.openUserWatchHistory();
    //   await expect(page).toHaveTitle(`Your watch history`);
    // });
    // test(`Should check the transition to the user's account settings page`, async ({ page }) => {
    //   await accountMenu.openUserAccountSettings();
    //   await expect(page).toHaveTitle(`Account settings`);
    // });
    // test(`Should check signing out`, async ({ page }) => {
    //   await accountMenu.signOut();
    //   await expect(header.signInButton).toBeVisible();
    // });
  });
});
