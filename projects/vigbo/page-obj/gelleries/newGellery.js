const Base = require('../base');

class NewGellery extends Base {
  constructor(page) {
    super(page);
    this.iframeLocator = this.page.frameLocator('//iframe[@id="frameGalleries"]');
  }

  get uploadPhotoButton() {
    return this.iframeLocator.locator('//div[@class="upload-placeholder_root__kCKai"]//button[@type]');
  }

  get photoInput() {
    return this.iframeLocator.locator('//div[@role="button"]//input');
  }

  get uploadedPhoto() {
    return this.iframeLocator.locator('//img[@class="photo_image__aQgsN"]');
  }

  get designButton() {
    return this.iframeLocator.locator('//ul[@class="navigation_list__QGt1O"]//a[contains(text(), "Оформление")]');
  }

  get uploadCoverButton() {
    return this.iframeLocator.locator('//header[@class="dropzone_header__EOceq"]//button[@type]');
  }

  get coverInput() {
    return this.iframeLocator.locator('//div[@role="button"]//input[@type="file"]');
  }

  get gelleryListButton() {
    return this.iframeLocator.locator('//button[@class="header_go-back__ogk7w"]');
  }

  async uploadPhoto(photoDir) {
    await this.photoInput.setInputFiles(photoDir);
    await this.page.waitForTimeout(3000);
  }

  async uploadCover(coverDir) {
    await this.designButton.click();
    await this.coverInput.setInputFiles(coverDir);
    await this.page.waitForTimeout(3000);
  }

  async goToGelleryList() {
    await this.gelleryListButton.click();
  }

  //favorites

  get getNotificationsCheck() {
    return this.iframeLocator.locator('//main//span[contains(text(), "Получать уведомления")]//ancestor::label/div[@class="switch_inner__OFwt-"]');
  }

  get limitQuantityCheck() {
    return this.iframeLocator.locator('//main//span[contains(text(), "Ограничить количество")]//ancestor::label/div[@class="switch_inner__OFwt-"]');
  }

  get maxPhotoAmountInput() {
    return this.iframeLocator.locator('//div[@class="limit_block__uaMRr"]//input[@type="text"]');
  }

  get favoritesButton() {
    return this.iframeLocator.locator('//ul[@class="navigation_list__QGt1O"]//a[contains(text(), "Избранное")]');
  }

  async turnOnGetNotificationsCheck() {
    await this.getNotificationsCheck.click();
  }

  async turnOnLimitOfPhotosCheck() {
    await this.limitQuantityCheck.click();
  }

  async fillMaxPhotoAmount(photoAmount) {
    await this.maxPhotoAmountInput.fill(photoAmount);
  }

  async openFavorutesSettings() {
    await this.favoritesButton.click();
  }

  //reviews

  get sendNotificationsCheck() {
    return this.iframeLocator.locator('//div[@class="switch_inner__OFwt-"]');
  }

  get appearingPopup() {
    return this.iframeLocator.locator('//div[@role="dialog"]//p');
  }

  async turnOnSendingNotifications() {
    await this.sendNotificationsCheck.click();
  }
}

module.exports = NewGellery;
