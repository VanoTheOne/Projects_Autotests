const Base = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get sighInButton() {
    return this.page.locator('//button[@type="submit"]');
  }

  get emailInputField() {
    return this.page.locator('//input[@type="email"]');
  }

  get passwordInputField() {
    return this.page.locator('//input[@type="password"]');
  }

  get loginButton() {
    return this.page.locator('//div[@class="mobile-menu-block__bottom"]/a[@class="btn mod--wide js--btn-style js--button-open-registration"]');
  }

  get startButton() {
    return this.page.locator('//div[@class="mobile-menu-block__bottom"]/a[@class="menu-main__login-text link-style--menu"]');
  }

  get menuButton() {
    return this.page.locator('//div[@class="header-main"]//div[@class="menu-main__right"]');
  }

  get failLoginMessage() {
    return this.page.locator('//div[@class="login-form--fail show"]');
  }

  get noEmailMessage() {
    return this.page.locator('//div[@class="lp-gallery_modal-form-group-wrap"]//div[contains(text(), "Введите e-mail")]');
  }

  get noPasswordMessage() {
    return this.page.locator('//div[@class="lp-gallery_modal-form-group-wrap"]//div[contains(text(), "Введите пароль")]');
  }

  async logInUser(login, password) {
    await this.menuButton.click();
    await this.startButton.click();
    await this.emailInputField.click();
    await this.emailInputField.fill(login);
    await this.passwordInputField.click();
    await this.passwordInputField.fill(password);
    await this.sighInButton.click();
  }
}

module.exports = LoginPage;
