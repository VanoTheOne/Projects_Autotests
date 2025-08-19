const Base = require('../base');

class Gelleries extends Base {
  constructor(page) {
    super(page);
    this.iframeLocator = this.page.frameLocator('//iframe[@id="frameGalleries"]');
  }

  get createGelletyButton() {
    return this.iframeLocator.locator('//div[@id="root"]//button[contains(@class, "button_button__q8J4o")]').first();
  }

  get gelleryNameField() {
    return this.iframeLocator.locator('//div[@class="label"]//input[@type="text"]');
  }

  get shootDateField() {
    return this.iframeLocator.locator('//div[@class="input-with-date-picker_leveler__jOgEZ"]//input');
  }

  get selectDate() {
    return this.iframeLocator.locator('//div[@class="react-calendar__month-view__days"]//button[@class="react-calendar__tile react-calendar__month-view__days__day"][1]');
  }

  get periodOfStoringField() {
    return this.iframeLocator.locator('//div[@class="select_container__CD+LW"]//input');
  }

  get submitButton() {
    return this.iframeLocator.locator('//button[@type="submit"]');
  }

  get newGelleryName() {
    return this.iframeLocator.locator('//div[@class="preview-info_root__L4+4q preview-info_root-list__vPVo1"]//span[contains(text(), "Новая галерея")]').first();
  }

  get deleteFirstGelleryButton() {
    return this.iframeLocator.locator('//div[@class="gallery-preview_prewiew-card__pp-uw gallery-preview_list-card__B0PRv"]//button[@class="settings_button__xUPrG"]').first();
  }

  get settingsDotsButton() {
    return this.iframeLocator.locator('//button[@class="settings_dots__nW6RR"]').first();
  }

  get popupMenuDeleteButton() {
    return this.iframeLocator.locator('//div[@class="preview-info_actions-list__o85n+"]//aside//button[contains(text(), "Удалить галерею")]');
  }

  get confirmDeleteButton() {
    return this.iframeLocator.locator('//button[@class="button_button__q8J4o button_medium__rI0Ov button_black__vrHB4"]');
  }

  get gelleryInList() {
    return this.iframeLocator.locator('gallery-preview_prewiew-card__pp-uw gallery-preview_list-card__B0PRv');
  }

  get firsGelleryInList() {
    return this.iframeLocator.locator('//div[contains(@class,"gallery-preview_prewiew-card__pp-uw")]').first();
  }

  get shareGelleryButton() {
    return this.iframeLocator.locator('//div[@class="preview-info_actions-list__o85n+"]/button').first();
  }

  get watchGelleryButton() {
    return this.iframeLocator.locator('//button[@class="button_button__q8J4o button_medium__rI0Ov button_black__vrHB4"]');
  }

  get listsWithFavoritesButton() {
    return this.iframeLocator.locator('//div[contains(@class, "preview-info_footer__RNizf")]//a[contains(@href, "favorites")]').first();
  }

  get reviewsButton() {
    return this.iframeLocator.locator('//div[contains(@class, "preview-info_footer__RNizf")]//a[contains(@href, "reviews")]');
  }

  async createGellery(gelleryName) {
    await this.createGelletyButton.click();
    await this.gelleryNameField.fill(gelleryName);
    await this.shootDateField.click();
    await this.selectDate.click();
    await this.submitButton.click();
  }

  async openFavoritesSettings() {
    await this.listsWithFavoritesButton.click();
  }

  async openReviews() {
    await this.reviewsButton.click();
  }

  async openFirstGellery() {
    await this.firsGelleryInList.click();
  }

  async deleteFirstGellery() {
    await this.settingsDotsButton.hover();
    await this.popupMenuDeleteButton.click();
    await this.confirmDeleteButton.click();
  }

  async watchGellery() {
    await this.shareGelleryButton.click();

    const [newPage] = await Promise.all([this.page.context().waitForEvent('page'), this.watchGelleryButton.click()]);

    await newPage.waitForLoadState();
    await this.watchGelleryButton.click();

    return newPage;
  }

  //sales

  
}

module.exports = Gelleries;
