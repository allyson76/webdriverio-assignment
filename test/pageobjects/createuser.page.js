const Page = require('./mainpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputFirstname() {
    return $('#firstname');
  }

  get inputLastname() {
    return $('#lastname');
  }

  get inputEmail() {
    return $('#email_address');
  }

  get inputPassword() {
    return $('#password');
  }

  get inputConfirmPassword() {
    return $('input[name="password_confirmation"]');
  }

  get btnSubmit() {
    return $('button[class="action submit primary"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async createuser(firstname, lastname, email_address, password, password_confirmation) {
    await this.inputFirstname.setValue(firstname);
    await this.inputLastname.setValue(lastname);
    await this.inputEmail.setValue(email_address);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(password_confirmation);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('customer/account/create/');
  }
}

module.exports = new SignupPage();
