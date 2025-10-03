const Base = require('../base');

class ProfilePage extends Base {
  constructor(page) {
    super(page);
  }

  get editProfileButton() {
    return this.page.locator('//div[@data-testid="up-header"]//a[contains (@class, "ipc-btn ipc-btn--single-padding")]');
  }

  get userBio() {
    return this.page.locator('//div[@data-testid="up-header"]//div[@class="ipc-html-content-inner-div"]');
  }

  async openEditProfilePage() {
    await this.editProfileButton.click();
  }
}

module.exports = ProfilePage;
