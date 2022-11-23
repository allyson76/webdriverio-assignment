const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccountPage extends Page {
  /**
   * define selectors using getter methods
   */
  get flashMessage() {
    return $('div[data-bind= "html: $parent.prepareMessageForHtml(message.text)"]');
  }

  get ConfMessage2() {
    return $('.checkout-success>p');
  }

  get errorMessage() {
    return $('#email_address-error');
  }

  get title() {
    return $('.base');
  }
  get myOrder() {
    return $('main li:nth-child(2) a:nth-child(1)');
  }
}

module.exports = new MyAccountPage();
