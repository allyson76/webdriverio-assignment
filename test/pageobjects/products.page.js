const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get header() {
    return $('span[data-ui-id="page-title-wrapper"]');
  }

  get getproduct() {
    return $('img[alt="Ariel Roll Sleeve Sweatshirt"]');
  }

  get size() {
    return $('(//div[@id="option-label-size-143-item-166"])[4]');
  }

  get color() {
    return $('(//div[@id="option-label-color-93-item-58"])[1]');
  }

  get submitbtn() {
    return $('(//button[@class="action tocart primary"])[4]');
  }

  get carticon() {
    return $('.counter-number');
  }

  get proceedbtn() {
    return $('#top-cart-btn-checkout');
  }

  async addProductToCart() {
    await this.size.click();
    await this.color.click();
    await this.submitbtn.click();

  }

  // Scroll to fourth product
  // async scrollToProduct() {
  //   await this.getproduct.moveTo();
  // }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('women/tops-women/hoodies-and-sweatshirts-women.html');
  }
}

module.exports = new ProductsPage();
