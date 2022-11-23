const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderHistoryPage extends Page {
  /**
   * define selectors using getter methods
   */

  get vieworder_link() {
    return $('td[class="col actions"] a[class="action view"]');
  }

  get pageTitle() {
    return $('.page-title')
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('sales/order/history/');
  }
}

module.exports = new OrderHistoryPage();
