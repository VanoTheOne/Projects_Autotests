const Base = require('./base');

class Header extends Base {
  constructor(page) {
    super(page);
  }

  get signInButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//div[@class="sc-c12860f-0 dajuGE nav__userMenu"]/a');
  }

  get accountMenuButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//div[@class="sc-c12860f-0 dajuGE nav__userMenu"]//label[contains (@class, "ipc-btn ipc-btn--single-padding")]');
  }

  get accountMenuYourProfileButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your profile")]/..');
  }

  async openUserProfile() {
    await this.accountMenuButton.click();
    await this.accountMenuYourProfileButton.click();
  }
}

module.exports = Header;
