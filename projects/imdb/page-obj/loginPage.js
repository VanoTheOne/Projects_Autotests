const Base = require('./base');
const Header = require('../page-obj/header');
const { login, password } = require('../helpers/env');

class LoginPage extends Base {
  constructor(page) {
    super(page);

    this.header = new Header(page);
  }

  get signInWithIMDbButton() {
    return this.page.locator('//div[@class="display-button-container"]//a[@data-testid="sign_in_option_IMDB"]');
  }

  get emailInputField() {
    return this.page.locator('//div[@class="a-box"]//input[@type="email"]');
  }

  get passwordInputField() {
    return this.page.locator('//div[@class="a-box"]//input[@type="password"]');
  }

  get signInButton() {
    return this.page.locator('//div[@class="a-box"]//input[@id="signInSubmit"]');
  }

  async logInUser() {
    await this.navigate('https://www.imdb.com/');
    await this.header.signInButton.click();
    await this.signInWithIMDbButton.click();
    await this.emailInputField.fill(login);
    await this.passwordInputField.fill(password);
    await this.signInButton.click();
  }
}

module.exports = LoginPage;
