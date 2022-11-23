const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
  /**
   * define selectors using getter methods
   */

  get placeorderbtn() {
    return $('button[title="Place Order"]');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('checkout/#payment');
  }
}


module.exports = new PaymentPage();
