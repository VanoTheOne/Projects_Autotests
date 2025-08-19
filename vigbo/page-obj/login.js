const Base = require('../page-obj/base');

class Login extends Base {
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
    return this.page.locator('//p[@class="lp-gallery_modal-descritpion"]/a');
  }

  get startButton() {
    return this.page.locator('//div[@class="first-slider__content"]//a').first();
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
    await this.startButton.click();
    await this.loginButton.click();
    await this.emailInputField.click();
    await this.emailInputField.fill(login);
    await this.passwordInputField.click();
    await this.passwordInputField.fill(password);
    await this.sighInButton.click();
  }
}

module.exports = Login;
