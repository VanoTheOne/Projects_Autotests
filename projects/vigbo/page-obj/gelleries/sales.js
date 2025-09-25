const Base = require('../base');

class Sales extends Base {
  constructor(page) {
    super(page);
    this.iframeLocator = this.page.frameLocator('//iframe[@id="frameGalleries"]');
  }

  get salesButton() {
    return this.iframeLocator.locator('//nav[@class="header_nav__JD09b"]//a[@href="/admin/print-sales"]');
  }
}

module.exports = Sales;
