const Base = require('../page-obj/base');

class Loginer extends Base {
  constructor(page) {
    super(page);
  }

  get sighInButton() {
    return this.page.locator('//div[@class="menu-main__login"]/a');
  }

  get emailInputField() {
    return this.page.locator('//input[@type="email"]');
  }

  get passwordInputField() {
    return this.page.locator('//input[@type="password"]');
  }

  get loginButton() {
    return this.page.locator('//button[@type="submit"]');
  }

  async logInUser(page) {
    await page.goto('https://vigbo.com/');
    await this.sighInButton.click();
    await this.emailInputField.click();
    const login = 'van0the0ne@gmail.com';
    await this.emailInputField.fill(login);
    await this.passwordInputField.click();
    const password = 'vmlbg7W8qn';
    await this.passwordInputField.fill(password);
    await this.loginButton.click();
  }
}

module.exports = Loginer;
