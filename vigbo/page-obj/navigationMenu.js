const Base = require('./base');

class NavigationMenu extends Base {
  constructor(page) {
    super(page);
  }

  get websitesButton() {
    return this.page.locator('.navigation_href.navigation_sites');
  }

  get gelleriesButton() {
    return this.page.locator('.navigation_href.gallery');
  }

  get domainButton() {
    return this.page.locator('.navigation_href.navigation_domains');
  }

  get supportButton() {
    return this.page.locator('.navigation_href.navigation_support');
  }

  get optimizationButton() {
    return this.page.locator('//a[text()="SEO-оптимизация"]');
  }

  get bonusesButton() {
    return this.page.locator('//a[text()="Бонусы"]');
  }

  get ideasButton() {
    return this.page.locator('.navigation_href.js-open-idea');
  }

  get yourIdeasHeader() {
    return this.page.locator('//h1[text()="Ваши идеи"]');
  }

  get openMenuButton() {
    return this.page.locator('.user_menu-btn-open');
  }

  get profileSettingsButton() {
    return this.page.locator('.user_menu-options a.user_menu-el');
  }

  get paymentHystoryButton() {
    return this.page.locator('.user_menu-history .user_menu-el');
  }

  get logoutButton() {
    return this.page.locator('.user_menu-logout .user_menu-el');
  }

  async openPersonalSettings() {
    await this.openMenuButton.click();
    await this.profileSettingsButton.click();
  }
}

module.exports = NavigationMenu;
