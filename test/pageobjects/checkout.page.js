const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
  /**
   * define selectors using getter methods
   */
  get cart() {
    return $('.counter-number');
    // return $('.action.showcart.active');
    // return $('(//a[@class="action showcart active"])');
  }

  get proceedBtn() {
    return $('button[data-role="proceed-to-checkout"]');
  }
  // get addNewAddress() {
  //   return $('(//button[@class="action action-show-popup"])');
  // }

  get inputCompany() {
    return $('input[name="company"]');
  }

  get inputStreetAddress1() {
    return $('input[name="street[0]"]');
  }

  get inputStreetAddress2() {
    return $('input[name="street[1]"]');
  }

  get inputStreetAddress3() {
    return $('input[name="street[2]"]');
  }

  get inputCity() {
    return $('input[name="city"]');
  }

  get state_province() {
    return $('select[name="region_id"]');
  }

  get inputZipPostalcode() {
    return $('input[name="postcode"]');
  }

  get country() {
    return $('select[name="country_id"]');
  }

  get inputPhonenumber() {
    return $('input[name="telephone"]');
  }

  get rate() {
    return $('input[value="tablerate_bestway"]');
  }

  get nextbtn() {
    return $('(//button[@class="button action continue primary"])');
  }

  // get placeorderbtn() {
  //   return $('button[title="Place Order"]');
  // }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async shippinginfo(company, streetaddress1, streetaddress2, streetaddress3, city, zip_postalcode, phone_number) {
    await this.inputCompany.setValue(company);
    await this.inputStreetAddress1.setValue(streetaddress1);
    await this.inputStreetAddress2.setValue(streetaddress2);
    await this.inputStreetAddress3.setValue(streetaddress3);
    await this.inputCity.setValue(city);
    await this.state_province.click();
    await this.state_province.selectByAttribute('value', '14');
    await this.inputZipPostalcode.setValue(zip_postalcode);
    await this.country.click();
    await this.country.selectByAttribute('value', 'US');
    await this.inputPhonenumber.setValue(phone_number);
    await this.rate.click();
    await this.nextbtn.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('checkout/cart');
  }
}

module.exports = new CheckoutPage();
