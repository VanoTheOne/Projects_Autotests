const Base = require('./base');

class PersonalSettings extends Base {
  constructor(page) {
    super(page);
  }

  get personalDataButton() {
    return this.page.locator('//div[@data-radio-href="1"]');
  }

  get changePasswordButton() {
    return this.page.locator('//div[@data-radio-href="2"]');
  }

  get paymentDataButton() {
    return this.page.locator('//div[@data-radio-href="3"]');
  }

  get savePersonalDataButton() {
    return this.page.locator('//div[@data-radio-el="1"]//a');
  }

  get savePasswordButton() {
    return this.page.locator('//div[@data-radio-el="2"]//div[@class="md-user-s__action"]/a');
  }

  get changeCardButton() {
    return this.page.locator('//a[text()="Сменить карту"]');
  }

  async changeCard() {
    await this.paymentDataButton.click();
    await this.changeCardButton.click();
  }
}

module.exports = PersonalSettings;
